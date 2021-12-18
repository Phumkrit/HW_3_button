import React from "react";
import { Table,Badge,Spinner } from "react-bootstrap";
import axios from "axios";

function ProductPage() {
  const [detail, setDetail] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [error, seterror] = React.useState(null);

  const getData = async () => {
    try 
    {
        setloading(true)
        const resp = await axios.get(
            "https://api.codingthailand.com/api/course/1"
          );
          //console.log(resp.data)
          setDetail(resp.data.data)
    } 
    catch (error) 
    {
        seterror(error)
    } 
    finally 
    {
        setloading(false)
    }
    //setProduct(resp.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true){
      return(
          <div className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
        </div>
      )
  }

  if (error){
      return(
          <div className="text-center mt-5 text-danger">
              <h4>Error from API, Plese try again</h4>
              <p>{error.response.data.message}</p>
          </div>
      )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Detail Page</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Course ID</th>
                <th>Course Title</th>
                <th>Course Date Add</th>
                <th>Course timetotal</th>
                <th>Course View</th>
                <th>Course URL</th>
              </tr>
            </thead>
            <tbody>
            {

                detail.map((p, index) => {
                    return (
                        <tr key={p.id}>
                            <td>{p.ch_id}</td>
                            <td>{p.course_id}</td>
                            <td>{p.ch_title}</td>
                            <td>{p.ch_dateadd}</td>
                            <td>{p.ch_timetotal}</td>
                            <td><Badge variant="primary">{p.ch_view}</Badge></td>
                            <td>{p.ch_url}</td>
                        </tr>
                    )

                })
            }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
