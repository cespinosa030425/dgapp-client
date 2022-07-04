import React, { useEffect, useState } from "react";
import TreeForm from "./TreeForm";
import { getEmployeeTree } from "./../../api/person";

const Tree = () => {
  const [persons, setPersons] = useState({
    name: "",
    children: "",
    attributes: { age: "" },
    departament: "",
    position: "",
    photo: "",
  });

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
          //   console.log(root);
          //   console.log(persons);

          setPersons({
            name:
              root.firstName.split(" ", 1) + " " + root.lastName.split(" ", 1),
            children: root.children,
            departament: root.Departament.name,
            position: root.position,
            photo: root.photo,
          });
          //   setPersons(root);
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
      <div>
        <TreeForm persons={persons} />
      </div>
    </>
  );
};

export default Tree;