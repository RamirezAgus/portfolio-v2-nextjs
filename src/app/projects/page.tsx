import { getJSONData } from "@/lib/server";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { ProjectCardSkeleton } from "@/components/LoadingMessage";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProjectPage() {
  const data = await getJSONData();

  return (
    <section className="max-w-7xl w-full mt-10 px-4 md:px-16 mx-auto">
      <h1 className="text-violet-500 mb-6 text-3xl font-bold lg:text-4xl flex items-end pb-4 pt-2">
        Pro
        <span className="font-extrabold text-primary font-mono">jects🛠️</span>
      </h1>
      <div className="flex flex-col justify-center">
        <ul className="grid grid-cols-1 gap-4">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              <Suspense fallback={<ProjectCardSkeleton />}>
                <div className="w-full lg:w-1/3 flex justify-center items-center relative group">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    height={200}
                    width={300}
                    className="rounded-md w-full"
                  />
                </div>
                <div className="w-full lg:w-2/3">
                  <CardHeader className="py-2 px-6">
                    <CardTitle className="text-2xl pt-3 font-semibold">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="py-1">
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="py-2 pb-4">
                    <div className="flex space-x-2">
                      <Link
                        target="_blank"
                        href={project.live_url}
                        prefetch={false}
                      >
                        <Button
                          size="sm"
                          className="hover:text-violet-500 font-normal"
                        >
                          <GlobeIcon className="h-3 w-3 mr-1" />
                          Demo
                        </Button>
                      </Link>
                      <Link
                        target="_blank"
                        href={project.code_repo}
                        prefetch={false}
                      >
                        <Button
                          size="sm"
                          className="hover:text-violet-500 font-normal"
                          variant="outline"
                        >
                          <GitHubLogoIcon className="h-3 w-3 mr-1" />
                          Repo
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </Suspense>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
