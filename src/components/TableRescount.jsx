import React from "react";
import {
  Table,
  Dropdown,
  Row,
  Col,
  Tooltip,
  Grid,
  Button,
  Input,
  // Pagination,
} from "@nextui-org/react";
import { IconButton } from "./assets/IconButton";
import { DeleteIcon } from "./assets/DeleteIcon";
import { StyledBadge } from "./assets/StyledBadge";
import { useCallback } from "react";

const TableRescount = () => {
  const [price, setPrice] = React.useState();
  const [discount, setDiscount] = React.useState();
  const [lastDiscount, setLastDiscount] = React.useState([]);

  const [rows, setRows] = React.useState([
    // {
    //   key: 0,
    //   originalPrice: "100",
    //   discount: 10,
    //   discountedFrom: "-10.00",
    //   finalPrice: "90.00",
    // },
    // {
    //   key: 1,
    //   originalPrice: "62.50",
    //   discount: 20,
    //   discountedFrom: "-12.50",
    //   finalPrice: "50.00",
    // },
    // {
    //   key: 2,
    //   originalPrice: "149",
    //   discount: 50,
    //   discountedFrom: "-74.50",
    //   finalPrice: "74.50",
    // },
    // {
    //   key: 3,
    //   originalPrice: "24.50",
    //   discount: 10,
    //   discountedFrom: "-2.45",
    //   finalPrice: "22.05",
    // },
  ]);

  const [selected, setSelected] = React.useState("reset");

  const [filteredArray, setFilteredArray] = React.useState([]);

  const filter10 = rows.filter((item) => item.discount === 10);
  const filter20 = rows.filter((item) => item.discount === 20);
  const filter30 = rows.filter((item) => item.discount === 30);
  const filter50 = rows.filter((item) => item.discount === 50);

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  // React.useEffect(() => {
  //   if (filteredArray.length > 0) {
  //     switch (discount) {
  //       case 10:
  //         return setFilteredArray(filter10);

  //       case 20:
  //         return setFilteredArray(filter20);

  //       case 30:
  //         return setFilteredArray(filter30);

  //       case 50:
  //         return setFilteredArray(filter50);

  //       default:
  //         setFilteredArray([]);
  //     }
  //   } else {
  //     return;
  //   }
  //   // if (discount === 10) {
  //   //   setFilteredArray(filter10);
  //   // } else {
  //   //   console.log("sono nell'else");
  //   //   return;
  //   // }
  //   // eslint-disable-next-line
  // }, [rows]);

  React.useEffect(() => {
    // console.log(
    //   "FILTRO",
    //   rows.filter((item) => item.discount === 50)
    // );
    console.log("selected", selected);
  }, [selected]);

  React.useEffect(() => {
    console.log(selectedValue, "selectedValuee");
    console.log("modded", selectedValue.slice(0, -1));
    console.log("hii");
  }, [selectedValue]);

  React.useEffect(() => {
    // console.log("sono price", price);
    console.log("useffect", rows);
    console.log("filtered", filteredArray);
    // eslint-disable-next-line
  }, [rows]);

  React.useEffect(() => {
    console.log(selected.currentKey, "selected");

    switch (selected.currentKey) {
      case "10%":
        return setFilteredArray(filter10);
      case "20%":
        return setFilteredArray(filter20);
      case "30%":
        return setFilteredArray(filter30);
      case "50%":
        return setFilteredArray(filter50);
      case "reset":
        return setFilteredArray([]);
      default:
        return setFilteredArray([]);
    }
  }, [selected, rows]);

  const funzioneZ = (element) => {
    switch (element) {
      case "10%":
        return filteredArray;
      case "20%":
        return filteredArray;
      case "30%":
        return filteredArray;
      case "50%":
        return filteredArray;
      default:
        return rows;
    }
  };

  const deleteDiscount = useCallback(
    (discount) => {
      if (!rows) {
        return;
      }
      const index = rows.indexOf(discount);
      let arrTemp = [...rows];
      arrTemp.splice(index, 1);
      setRows(arrTemp);
    },
    [rows]
  );

  const columnsTableDiscount = [
    {
      key: "originalPrice",
      label: "Prezzo Iniziale",
    },
    {
      key: "discount",
      label: "% di Sconto",
    },
    {
      key: "discountedFrom",
      label: "Sconto sottratto",
    },
    {
      key: "finalPrice",
      label: "Prezzo Finale",
    },
    {
      key: "actions",
      label: "Azioni",
    },
  ];

  const columnsLastDiscount = [...columnsTableDiscount];
  columnsLastDiscount.length = 4;

  const renderColumn = (item, columnKey) => {
    const columnValue = item.label;
    switch (columnKey) {
      case "originalPrice":
        return <span style={{ fontSize: "16px" }}>{columnValue}</span>;

      case "discount":
        return (
          <div style={{ display: "flex" }}>
            <StyledBadge
              css={{ fontSize: "16px", textTransform: "capitalize" }}
              type={renderColor(parseInt(selectedValue.slice(0, -1)))}
            >
              {selectedValue.length === 3
                ? selectedValue.slice(0, -1) + columnValue
                : columnValue}
              {/* {selectedValue.slice(0, -1) + columnValue} */}
            </StyledBadge>
            {/* <Dropdown>
              <Dropdown.Button
                css={{ fontSize: "16px", textTransform: "capitalize" }}
                color="primary"
                light
              ></Dropdown.Button>
              <Dropdown.Menu
                color="primary"
                variant="light"
                aria-label="filterDiscount"
              >
                <Dropdown.Item key="10%">
                  <StyledBadge css={{ fontSize: "16px" }} type="active">
                    10%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="20%">
                  <StyledBadge css={{ fontSize: "16px" }} type="vacation">
                    20%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="30%">
                  <StyledBadge css={{ fontSize: "16px" }} type="almost">
                    30%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="30%">
                  <StyledBadge css={{ fontSize: "16px" }} type="paused">
                    50%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="reset" color="error" withDivider>
                  Reset
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <Dropdown>
              <Dropdown.Button
                flat
                light
                color="light"
                css={{ tt: "capitalize" }}
              >
                {/* {selectedValue} */}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="primary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="10%">
                  <StyledBadge css={{ fontSize: "16px" }} type="active">
                    10%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="20%">
                  <StyledBadge css={{ fontSize: "16px" }} type="vacation">
                    20%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="30%">
                  <StyledBadge css={{ fontSize: "16px" }} type="almost">
                    30%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="50%">
                  <StyledBadge css={{ fontSize: "16px" }} type="paused">
                    50%
                  </StyledBadge>
                </Dropdown.Item>
                <Dropdown.Item key="reset" color="error" withDivider>
                  Reset
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        );

      case "discountedFrom":
        return <span style={{ fontSize: "16px" }}>{columnValue}</span>;

      case "finalPrice":
        return <span style={{ fontSize: "16px" }}>{columnValue}</span>;

      case "actions":
        return <span style={{ fontSize: "16px" }}>{columnValue}</span>;

      default:
        return columnValue;
    }
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const renderColor = (value) => {
    switch (value) {
      case 10:
        return "active";
      case 20:
        return "vacation";
      case 30:
        return "almost";
      case 50:
        return "paused";
      default:
        return "active";
    }
  };

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "originalPrice":
        return <span style={{ fontSize: "20px" }}>{cellValue + " €"}</span>;

      case "discount":
        return (
          <StyledBadge
            css={{ fontSize: "18px" }}
            type={renderColor(user.discount)}
          >
            {cellValue + " %"}
          </StyledBadge>
        );

      case "discountedFrom":
        return (
          <span style={{ fontSize: "20px" }}>{"-" + cellValue + " €"}</span>
        );

      case "finalPrice":
        return <span style={{ fontSize: "24px" }}>{cellValue + " €"}</span>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Elimina Sconto" color="error">
                <IconButton>
                  <DeleteIcon
                    size={20}
                    fill="#FF0080"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteDiscount(user);
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!price) return;
    setLastDiscount(() => {
      return [
        {
          key: 1,
          originalPrice: price,
          discount: discount,
          discountedFrom: ((price / 100) * discount).toFixed(2),
          finalPrice: (price - (price / 100) * discount).toFixed(2),
        },
      ];
    });
    setRows((prev) => {
      return [
        ...prev,
        {
          key: Date.now(),
          originalPrice: price,
          discount: discount,
          discountedFrom: ((price / 100) * discount).toFixed(2),
          finalPrice: (price - (price / 100) * discount).toFixed(2),
        },
      ];
    });
  };

  let lowestToHighest = rows.sort((a, b) => a.originalPrice - b.originalPrice);

  // const filter50 = rows.filter((item) => item.discount === 50);
  return (
    <>
      <Grid.Container gap={2}>
        <Row>
          <Col css={{ d: "flex", justifyContent: "center" }}>
            <form
              style={{ textAlign: "center" }}
              action="discount"
              onSubmit={handleSubmit}
            >
              <Input
                style={{ textAlign: "center" }}
                clearable
                size="xl"
                type="text"
                placeholder="Inserire Prezzo"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  css={{
                    fontWeight: 700,
                    color: "#41ec8b",
                    background: "#042f14",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "5px",
                    fontSize: "20px",
                  }}
                  rounded
                  type="submit"
                  onClick={() => {
                    // console.log("sono enter1", price);
                    setDiscount(10);
                  }}
                >
                  10%
                </Button>
                <Button
                  css={{
                    fontWeight: 700,
                    color: "#f6ad37",
                    background: "#3a2503",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "5px",
                    fontSize: "20px",
                  }}
                  rounded
                  type="submit"
                  onClick={() => {
                    // console.log("sono enter2", price);
                    setDiscount(20);
                  }}
                >
                  20%
                </Button>
                <Button
                  css={{
                    fontWeight: 700,
                    color: "#9750dd",
                    background: "#1e003d",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "5px",
                    fontSize: "20px",
                  }}
                  rounded
                  type="submit"
                  onClick={() => {
                    // console.log("sono enter2", price);
                    setDiscount(30);
                  }}
                >
                  30%
                </Button>
                <Button
                  css={{
                    fontWeight: 700,
                    color: "#f4256d",
                    background: "#300313",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "5px",
                    fontSize: "20px",
                  }}
                  rounded
                  type="submit"
                  onClick={() => {
                    // console.log("sono enter2", price);
                    setDiscount(50);
                  }}
                >
                  50%
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Grid.Container>
      <hr />
      <h1>LAST DISCOUNT</h1>
      <Grid.Container gap={2}>
        <Row>
          <Col css={{ d: "flex", justifyContent: "center" }}>
            <Table
              striped
              aria-label="Last Discount"
              color={"primary"}
              selectionMode="multiple"
              containerCss={{
                height: "auto",
                minWidth: "100%",
                textAlign: "left",
              }}
            >
              <Table.Header columns={columnsLastDiscount}>
                {(column) => (
                  <Table.Column css={{ fontSize: "15px" }} key={column.key}>
                    {column.label}
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={lastDiscount}>
                {(item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => (
                      <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </Col>
        </Row>
      </Grid.Container>

      <hr />
      <h1>TABLE DISCOUNT</h1>
      <Grid.Container gap={2}>
        {/* <Button onClick={() => setFilteredArray([])}>Reset Filtri</Button>
        <Button onClick={() => setFilteredArray(filter10)}>Filtra 10</Button>
        <Button onClick={() => setFilteredArray(filter20)}>Filtra 20</Button>
        <Button onClick={() => setFilteredArray(filter30)}>Filtra 30</Button>
        <Button onClick={() => setFilteredArray(filter50)}>Filtra 50</Button> */}
        <Grid xs={12}>
          <Table
            striped
            aria-label="Table Discount"
            color={"primary"}
            selectionMode="multiple"
            containerCss={{
              height: "auto",
              minWidth: "100%",
              textAlign: "left",
            }}
          >
            <Table.Header columns={columnsTableDiscount}>
              {(column) => (
                <Table.Column css={{ fontSize: "15px" }} key={column.key}>
                  {renderColumn(column, column.key)}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body //items={lowestToHighest}
              items={lowestToHighest}
            >
              {/* {filteredArray.length > 0
                ? filteredArray */}
              {/* //----- */}
              {funzioneZ(selected.currentKey)
                // .filter((item) => item.discount === 30)
                .map((item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => (
                      <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                    )}
                  </Table.Row>
                ))}
              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
              {/* {selected === "10%"
                ? rows
                    // .filter((item) => item.discount === 30)
                    .map((item) => (
                      <Table.Row key={item.key}>
                        {(columnKey) => (
                          <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                      </Table.Row>
                    ))
                : filteredArray
                    //.filter((item) => item.discount === 30)
                    .map((item) => (
                      <Table.Row key={item.key}>
                        {(columnKey) => (
                          <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                      </Table.Row>
                    ))} */}
              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
              {/* {(item) => (
                <Table.Row key={item.key}>
                  {(columnKey) => (
                    <Table.Cell>
                      {renderCell(item, columnKey, deleteDiscount)}
                    </Table.Cell>
                  )}
                </Table.Row>
              )} */}
            </Table.Body>
            {/* <Table.Pagination
              shadow
              initialPage={1}
              noMargin
              align="center"
              rowsPerPage={3}
              onPageChange={(page) => console.log({ page })}
            /> */}
          </Table>
        </Grid>
        <Grid xs={12}></Grid>
      </Grid.Container>
    </>
  );
};

export default TableRescount;
