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
const TreeNode = ({ node, parentIds = [], onClick, selectedNodeId }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    const nodeId = [...parentIds, node.id].join("_");
    if (onClick) onClick(nodeId); // Notify parent about the selected node
    console.log({
      nodeId: nodeId,
      level: node.level,
      parentIds,
    });
  };

  const nodeId = [...parentIds, node.id].join("_"); // Generate unique ID
  const isSelected = nodeId === selectedNodeId;

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        id={nodeId}
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent clicks
          setExpanded(!expanded);
          handleClick();
        }}
        style={{
          cursor: "pointer",
          fontWeight: isSelected ? "bold" : "normal", // Apply bold style if selected
        }}
      >
        {node.children?.length ? (expanded ? "[-]" : "[+]") : ""} {node.name}
      </div>
      {expanded && node.children?.length > 0 && (
        <div>
          {node.children.map((child) => (
            <TreeNode
              key={`${child.level}_id_${child.id}`} // Unique key with level prefix
              node={child}
              parentIds={[...parentIds, node.id]} // Pass parent's ID in the hierarchy
              onClick={onClick} // Pass onClick down
              selectedNodeId={selectedNodeId} // Pass the selected node ID
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null); // Track selected node ID
  const treeData = buildTree(data);

  return (
    <div>
      {treeData.map((rootNode) => (
        <TreeNode
          key={rootNode.level1_id}
          node={rootNode}
          onClick={setSelectedNodeId} // Set the selected node ID
          selectedNodeId={selectedNodeId} // Pass the selected node ID
        />
      ))}
    </div>
  );
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
