"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
// import { SquarePlus, Trash2, Pencil } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
// import { FaTrash } from "react-icons/fa";
// import moment from "moment";
// import { deleteAccounts } from "@/shared/Api/dashboard";
import { getTopUser } from "@/shared/Api/dashboard";
const page = () => {
  const topUsers = useSelector((state: any) => state.dash.topUsers);

  // const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  console.log(topUsers, "===");
  const dispatch = useDispatch();
  const fetchAccounts = async () => {
    return await getTopUser(dispatch);
  };
  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <Fragment>
      <Seo title={"high-scores"} />
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>High Score</Card.Title>
              <div className="d-flex flex-wrap gap-2">
                {/* <div
                    title="Delete selected logs"
                    className="hover:text-red-500"
                  >
                    <Button
                      className="btn-md bg-[#546dfe]"
                      onClick={handleDeleteSelectedAccounts}
                      disabled={selectedAccounts.length === 0}
                    >
                      <FaTrash size={14} className="hover:text-red-400" />
                    </Button>
                  </div> */}
                {/* <div className="flex justify-between gap-2">
                    <button 
                      className="title:rounded-md"
                      onClick={handleOpenPopup} 
                      title={"Add Url"}
                    >
                      <SquarePlus 
                        size={30} 
                        className="hover:text-blue-400"
                      />
                    </button>
                    <Popup
                      isOpen={isPopupOpen}
                      onClose={handleClosePopup}
                      urls={urls}
                      setUrls={setUrls}
                      descVal={descVal}
                      setDescVal={setDescVal}
                      updateId={updateId}
                      setUpdate={setUpdate}
                    />
                <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Search Here"
                    aria-label=".form-control-sm example"
                  />
                </div> */}
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    {/* <th>
                      <input
                        title="select all"
                        className="mt-1"
                        type="checkbox"
                        checked={selectedAccounts.length === topUsers?.topUsers.length}
                        onChange={toggleSelectAll}
                      />
                    </th> */}
                    {/* <th>Image</th> */}
                    <th>Name</th>
                    <th>Accounts</th>
                  </thead>
                  <tbody>
                    {topUsers?.topUsers?.length > 0 &&
                      topUsers?.topUsers?.map((account: any) => (
                        <tr key={account._id}>
                          <td>
                            <img
                              src={
                                account?.profileImage ??
                                "https://firebasestorage.googleapis.com/v0/b/xtremefish-9ceaf.appspot.com/o/images%2Favatar.png?alt=media&token=6b910478-6e58-4c73-8ea9-f4827f2eaa1b"
                              }
                              alt="img"
                              className="avatar avatar-xs avatar-rounded mb-1 mr-2"
                            /> 
                            {account.userName}
                          </td>
                          <td>{account.numberOfAccounts}</td>
                          {/* <td>
                                <a href={url.description + `${user?._id}`} target="_blank">{url.description}</a>
                            </td> */}
                          {/* <td>
                            <div className="btn-list">
                              {moment(url?.createdAt).format('ddd, MMM DD,YYYY')}
                            </div>
                            </td> */}
                          {/* <td>
                            <button
                              className="text-red-500"
                              // onClick={() => filterUrls(url)}
                            >
                              <Trash2 size={14} />
                            </button>
                            {/* <button
                              className="text-blue-500 ml-4"
                              // onClick={() => handleUpdate(url)}
                            >
                              <Pencil size={14} />
                            </button> */}
                          {/* </td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center">
                <div>
                  {" "}
                  <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                </div>
                <div className="ms-auto">
                  <nav
                    aria-label="Page navigation"
                    className="pagination-style-4"
                  ></nav>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default page;
