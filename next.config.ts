import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const nextConfig: NextConfig = {
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,
  // The solution pages were reorganised around audiences; keep the old URLs working.
  async redirects() {
    return [
      { source: "/for-students", destination: "/for-students/academic-support", permanent: true },
      {
        source: "/solutions/school-performance",
        destination: "/for-administration",
        permanent: true,
      },
      { source: "/solutions/teacher-tools", destination: "/for-teachers", permanent: true },
      {
        source: "/solutions/academics",
        destination: "/for-students/academic-support",
        permanent: true,
      },
      {
        source: "/solutions/college-readiness",
        destination: "/for-students/college-readiness",
        permanent: true,
      },
      { source: "/solutions", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
