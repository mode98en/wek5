"use client";

import { Container } from "@/components/container/container";
import { Header } from "@/components/header/header";
import styles from './page.module.css'
import { Card } from "@/components/card/card";
import { Footer } from "@/components/footer/footer";
import { useEffect, useState } from "react";



export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = () => {
    setLoading(true)
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then(res => res.json())
      .then(data => {
        setList(data.blogs);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container> 
            <div className={styles.title}>
            <h1>Simple Blog.</h1>
            <p>A blog created by Aon 2023</p>
          </div>
          </Container>
        </div>
      </div>
      <Container>
        {loading && (<div className={styles.loadingConainer}><span className={styles.loader}>L &nbsp; ading</span> </div>
        )}
        <div className={styles.grid}>
          {list.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
