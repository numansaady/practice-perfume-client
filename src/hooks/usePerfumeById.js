import { useEffect, useState } from "react";

const usePerfumeById = perfumeId =>{
    const [perfume, setPerfume] = useState({});

    useEffect( () =>{
        const url = `https://blooming-lowlands-86443.herokuapp.com/perfume/${perfumeId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setPerfume(data));

    }, [perfumeId]);
    return [perfume, setPerfume]
}

export default usePerfumeById;