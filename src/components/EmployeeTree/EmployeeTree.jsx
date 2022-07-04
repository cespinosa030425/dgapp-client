import React, { useEffect, useState } from "react";
import EmployeeTreeForm from "./EmployeeTreeForm";
import { getEmployeeTree } from "./../../api/person";

const EmployeeTree = () => {
  const [persons, setPersons] = useState();
  console.log(persons);
  useEffect(() => {
    let unmounted = false;

    getEmployeeTree()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!unmounted) {
          const userFalt = res.reduce((acc, el, i) => {
            acc[el.personId] = i;
            return acc;
          }, {});

          let root;
          res.forEach((el) => {
            // Handle the root element
            if (el.reportsTo === null) {
              root = el;
              return;
            }
            // Use our mapping to locate the parent element in our res array
            const parentEl = res[userFalt[el.reportsTo]];
            // Add our current el to its parent's `children` array
            parentEl.children = [...(parentEl.children || []), el];
          });

          setPersons(root);
        }
      })
      .catch((err) => {
        console.error(err.status);
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <EmployeeTreeForm persons={persons} />
      </div>
    </>
  );
};

export default EmployeeTree;