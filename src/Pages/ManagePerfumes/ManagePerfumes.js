import React from "react";
import { useNavigate } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ManagePerfumes = () => {
  const [perfumes, setPerfumes] = usePerfumes();
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate('/add');
  }

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://blooming-lowlands-86443.herokuapp.com/perfume/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = perfumes.filter(perfume => perfume._id !== id);
                setPerfumes(remaining);
            })
        }
  }

  return (
    <div id="perfumes" className="container">
      <PageTitle title="Manage Inventory"></PageTitle>
      <div className="row">
        <h1 className="text-primary text-center mt-5"> Manage Inventory</h1>
        <div className="">
        <table className="table table-success table-striped table-hover">
              <thead>
                <th>Perfume Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Add Item</th>
                <th>Action</th>
              </thead>
          {perfumes.map((perfume) => (            
            
              <tbody key={perfume._id}>
                <tr>
                  <td>{perfume.name}</td>
                  <td>{perfume.description}</td>
                  <td>${perfume.price}</td>
                  <td>{<button onClick={handleAddItem}>Add Item</button>}</td>
                  <td>{<button onClick={()=>handleDelete(perfume._id)}>Delete Item</button>}</td>
                </tr>
              </tbody>
          ))}          
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePerfumes;
