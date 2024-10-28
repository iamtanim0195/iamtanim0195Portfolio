import Image from "next/image";
import bg from "../../../../public/background/projects-background.webp";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";

const Staff = dynamic(() => import("@/components/models/Staff"), {
    ssr: false,
});

export const metadata = {
    title: "Projects",
};

// Direct data fetching in an async component
export default async function Home() {
    let projects = [];
    const vercelToken = process.env.NEXT_PUBLIC_VERCEL_TOKEN;

    try {
        const res = await fetch('https://api.vercel.com/v6/deployments', {
            headers: {
                Authorization: `Bearer ${vercelToken}`,
            },
        });

        if (res.ok) {
            const data = await res.json();
            const allDeployments = data.deployments;

            // Group by project name and filter the latest deployment
            const uniqueProjects = {};

            allDeployments.forEach((deployment) => {
                const projectName = deployment.name;

                // Check if this is the first deployment or a newer one than the stored one
                if (
                    !uniqueProjects[projectName] ||
                    new Date(deployment.created) > new Date(uniqueProjects[projectName].created)
                ) {
                    uniqueProjects[projectName] = deployment;
                }
            });

            // Convert the object to an array of the latest deployments
            projects = Object.values(uniqueProjects);
        } else {
            throw new Error('Failed to fetch projects');
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }

    // Directly log the filtered projects in the browser console
    return (
        <>
            <Image
                src={bg}
                alt="Next.js Portfolio website's about page background image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
                priority
                sizes="100vw"
            />

            <ProjectList projects={projectsData} />

            <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </>
    );
}