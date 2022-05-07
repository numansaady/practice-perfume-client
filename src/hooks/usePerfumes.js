import { useEffect, useState } from "react";

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch("https://blooming-lowlands-86443.herokuapp.com/perfume")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);

  return [perfumes, setPerfumes]
}

export default usePerfumes;