import { useRouter } from "next/router";
import { useEffect } from "react";
import Article1 from "../components/article/Article1"; 
import Category1 from "../components/category/Category1";
import Feature1 from "../components/feature/Feature1";
import Footer from "../components/footer/Footer";
import Header1 from "../components/header/Header1";
import JobLocation1 from "../components/job-loaction/JobLocation1";
import Review1 from "../components/review/Review1";
import TopRecruiters1 from "../components/top-recruiters/TopRecruiters";
import TrustedCompany1 from "../components/trusted-company/TrustedCompany1";
import WorkProcess1 from "../components/work-process/WorkProcess1";
import Banner2 from "../components/banner/Banner2";

export default function Home() {
  const currentPage = useRouter().pathname;
  useEffect(() => {
    document.body.className = currentPage === "/" ? "bg-wight" : "";
  });
  return (
    <>
      <Header1 /> 
      <Banner2/>
      <Feature1 />
      <Category1 />
      <WorkProcess1 />
      <JobLocation1 />
      <Review1 />
      {/* <TrustedCompany1 /> */}
      <TopRecruiters1 />
      <Article1 />
      <Footer />
    </>
  );
}
