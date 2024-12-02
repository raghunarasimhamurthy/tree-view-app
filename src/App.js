import React, { useState } from "react";
import data from './data.json'



const buildTree = (data) => {
    const { level1, level2, level3 } = data;
  
    // Prepare data for each level
    const level1Map = level1.map((item) => ({
      ...item,
      children: [],
      level: "level1",
      id: item.level1_id,
    }));
    const level2Map = level2.map((item) => ({
      ...item,
      children: [],
      level: "level2",
      id: item.level2_id,
    }));
    const level3Map = level3.map((item) => ({
      ...item,
      level: "level3",
      id: item.level3_id,
    }));
  
    // Link level3 items to level2
    level3Map.forEach((item) => {
      const parent = level2Map.find((lvl2) => lvl2.level2_id === item.level2_id);
      if (parent) {
        parent.children.push(item);
      }
    });
  
    // Link level2 items to level1
    level2Map.forEach((item) => {
      const parent = level1Map.find((lvl1) => lvl1.level1_id === item.level1_id);
      if (parent) {
        parent.children.push(item);
      }
    });
  
    return level1Map; // Return the top-level hierarchy
  };
  

const TreeNode = ({ node, parentIds = []  }) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        console.log({
          nodeId: node.id,
          level: node.level,
          parentIds,
        });
      };
  
    return (
      <div style={{ marginLeft: "20px" }}>
        <div
          onClick={() => {setExpanded(!expanded);
            handleClick();}
          }
          style={{ cursor: "pointer", fontWeight: node.children?.length ? "bold" : "normal" }}
        >
           {node.children?.length ? (expanded ? "[-]" : "[+]") : ""}{node.name}
        </div>
        {expanded && node.children?.length > 0 && (
          <div>
            {node.children.map((child) => (
              <TreeNode
                key={`${child.level}_id_${child.id}`} // Unique key with level prefix
                node={child}
                parentIds={[...parentIds, node.id]} // Pass parent's ID in the hierarchy
              />
            ))}
          </div>
        )}
      </div>
    );
  };
  
const TreeView = ({ data }) => {
  const treeData = buildTree(data);
  console.log(treeData)
  return (
    <div>
      {treeData.map((rootNode) => (
        <TreeNode key={rootNode.level1_id} node={rootNode} />
      ))}
    </div>
  );
};



const data1a = {
  level1: [
    { level1_id: 1, name: "Root 1" },
    { level1_id: 2, name: "Root 2" },
  ],
  level2: [
    { level2_id: 101, level1_id: 1, name: "Child 1.1" },
    { level2_id: 102, level1_id: 1, name: "Child 1.2" },
    { level2_id: 201, level1_id: 2, name: "Child 2.1" },
  ],
  level3: [
    { level3_id: 1001, level2_id: 101, level1_id: 1, name: "Leaf 1.1.1" },
    { level3_id: 1002, level2_id: 101, level1_id: 1, name: "Leaf 1.1.2" },
    { level3_id: 2001, level2_id: 201, level1_id: 2, name: "Leaf 2.1.1" },
  ],
};



const App = () => {
  return (
    <div>
      <h1>Tree View Example</h1>
      <TreeView data={data} />
    </div>
  );
};

export default App;

