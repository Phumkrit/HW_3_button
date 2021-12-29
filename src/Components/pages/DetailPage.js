import React from "react";
import { Button, Spinner, Card, CardDeck } from "react-bootstrap";
import axios from "axios";

import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function DetailPage() {
  const { id, title } = useParams();
  const history = useHistory();
  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getData = async () => {
    try {
      setLoading(true); // เริ่มหมุนติ้วๆตรงนี้
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      // console.log(resp.data)
      setDetail(resp.data.data);
    } catch (error) {
      // console.log(error.response)
      setError(error);
    } finally {
      setLoading(false); // หยุดตรงนี้ทุกกรณีที่ทำเสร็จว่าว่าจะ try หรือ catch ก็ตาม
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, Plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Detail Page</h2>
          <p>
            {title} ({id})
          </p>
          <Button variant="dark" onClick={() => {
            history.goBack()
          }}>Back</Button>

            <div className="row">
            <CardDeck>
            {
            detail.length > 0 ? (
              detail.map((d,index) => {
                return(
                 <div className="col-md-4" key={d.ch_id}>
                     <Card className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{d.ch_title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{d.ch_dateadd}</small>
                </Card.Footer>
              </Card>
                 </div>
                )
              })
            ) : (
              <h1>No Data</h1>
            )}
          </CardDeck>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
