import React, { useEffect, useState } from "react";
import axios from "axios";
import { type } from "os";

type articles = {
  author_name: string;
  date: {
    created_at: string;
    updated_at: string;
  };
  excerpt: string;
  image_thumbnail_url: string;
  slug: string;
  tags: [string, string, string];
  title: string;
};

type Props = articles;

const Coba = () => {
  const [data, setData] = useState<articles[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/articles").then((res) => {
      setData(res.data.data.articles);
    });
  }, []);
  console.log(data);

  return (
    <>
      <div>
        {data.map((e, i) => {
          return (
            <div key={i}>
              <p>{e.author_name}</p>
              <p>{e.date.created_at}</p>
              <p>{e.date.updated_at}</p>
              <p>{e.excerpt}</p>
              <p>{e.image_thumbnail_url}</p>
              <p>{e.slug}</p>
              <p>{e.tags[0]}</p>
              <p>{e.tags[1]}</p>
              <p>{e.tags[2]}</p>
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Coba;
