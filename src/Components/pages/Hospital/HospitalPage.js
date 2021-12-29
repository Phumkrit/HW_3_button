
import React, { useState,useEffect} from "react";
import { Table, Spinner } from "react-bootstrap";
import axios from "axios";
import Pagination from "react-bootstrap-4-pagination";


const pageSize = 10;

const HospitalPage = () => {
    const [hospital, setHospital] = React.useState([]);
    const [loading, setloading] = React.useState(false);
    const [error, seterror] = React.useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
  
    const getData = async (page) => {
        try {
          setloading(true); // เริ่มหมุนติ้วๆตรงนี้
          const resp = await axios.get(
            `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`
          );
          // console.log(resp.data)
          setHospital(resp.data.data);
          setTotal(resp.data.meta.pagination.total)
        } catch (error) {
          // console.log(error.response)
          seterror(error);
        } finally {
          setloading(false); // หยุดตรงนี้ทุกกรณีที่ทำเสร็จว่าว่าจะ try หรือ catch ก็ตาม
        }
      };
    
      useEffect(() => {
        getData(page);
      }, [page]);
    
      if (loading === true) {
        return (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="text-center mt-5 text-danger">
            <h4>Error from API, plese try again</h4>
            <p>{error.response.data.message}</p>
          </div>
        );
      }
      const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
      };
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <h2>Hospital Page</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {hospital.map((h, index) => {
                    return (
                      <tr key={h.id}>
                        <td>{h.id}</td>
                        <td>{h.code}</td>
                        <td>{h.h_name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Pagination 
                activePage={page}
                itemsCountPerPage={pageSize}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass='page-item'
                linkClass='page-link'
                prevPageText="ก่อนหน้า"
                nextPageText="ถัดไป"
              />
            </div>
          </div>
        </div>
      );
    }

export default HospitalPage
