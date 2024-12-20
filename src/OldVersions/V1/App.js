import React, { useState, useEffect } from "react";
import "./App.css";

// Mock data
const data1o = {
  level1: [
    { level1_id: "root1", name: "Division 1" },
    { level1_id: "root2", name: "Division 2" },
  ],
  level2: [
    { level2_id: "1234", level1_id: "root1", name: "Marketing" },
    { level2_id: "5678", level1_id: "root1", name: "Development" },
    { level2_id: "9100", level1_id: "root2", name: "Operations" },
    { level2_id: "9101", level1_id: "root2", name: "Finance" },
  ],
  level3: [
    {
      level3_id: "9102",
      level2_id: "1234",
      level1_id: "root1",
      name: "Social Media",
    },
    {
      level3_id: "9103",
      level2_id: "1234",
      level1_id: "root1",
      name: "SEO",
    },
    {
      level3_id: "9104",
      level2_id: "5678",
      level1_id: "root1",
      name: "Frontend",
    },
    {
      level3_id: "9105",
      level2_id: "5678",
      level1_id: "root1",
      name: "Backend",
    },
    {
      level3_id: "9106",
      level2_id: "9101",
      level1_id: "root2",
      name: "Tax",
    },
    {
      level3_id: "9107",
      level2_id: "9101",
      level1_id: "root2",
      name: "Payroll",
    },
  ],
};

const data1 = {
  "context": "productheirarchy",
  "mapping": {
    "level1": "brands_table",
    "level2": "groups_table",
    "level3": "items_sku"
  },
  "level1": [
    {
      "level1_id": 1,
      "name": "TBR"
    },
    {
      "level1_id": 2,
      "name": "TRANSTONE"
    },
    {
      "level1_id": 3,
      "name": "PCR"
    },
    {
      "level1_id": 4,
      "name": "KAPSEN"
    },
    {
      "level1_id": 5,
      "name": "LTB"
    },
    {
      "level1_id": 6,
      "name": "OTR"
    },
    {
      "level1_id": 7,
      "name": "NaN"
    },
    {
      "level1_id": 8,
      "name": "DC"
    },
    {
      "level1_id": 9,
      "name": "TBB"
    },
    {
      "level1_id": 10,
      "name": "AGRI"
    },
    {
      "level1_id": 11,
      "name": "LTR"
    },
    {
      "level1_id": 12,
      "name": "TUBE- TBB"
    },
    {
      "level1_id": 13,
      "name": "WHEEL GUM"
    },
    {
      "level1_id": 14,
      "name": "ADVANCE"
    },
    {
      "level1_id": 15,
      "name": "Wheel Rim"
    },
    {
      "level1_id": 16,
      "name": "EUROSOFT"
    },
    {
      "level1_id": 17,
      "name": "LCV"
    },
    {
      "level1_id": 18,
      "name": "GOLDPARTNER"
    },
    {
      "level1_id": 19,
      "name": "MIRAGE PCR"
    },
    {
      "level1_id": 20,
      "name": "PASSANGER"
    }
  ],
  "level2": [
    {
      "level2_id": 1,
      "name": "Tyres Arms",
      "level1_id": 1
    },
    {
      "level2_id": 2,
      "name": "Tyres",
      "level1_id": 2
    },
    {
      "level2_id": 3,
      "name": "Tyres Arms",
      "level1_id": 3
    },
    {
      "level2_id": 4,
      "name": "SPORT TRACK",
      "level1_id": 3
    },
    {
      "level2_id": 5,
      "name": "Tyres",
      "level1_id": 4
    },
    {
      "level2_id": 6,
      "name": "Tyres Otani",
      "level1_id": 3
    },
    {
      "level2_id": 7,
      "name": "Tyres Jk",
      "level1_id": 5
    },
    {
      "level2_id": 8,
      "name": "Tyres Jk",
      "level1_id": 1
    },
    {
      "level2_id": 9,
      "name": "Tyres Otani",
      "level1_id": 6
    },
    {
      "level2_id": 10,
      "name": "Tyres Arms",
      "level1_id": 1
    },
    {
      "level2_id": 11,
      "name": "Tyres Arms",
      "level1_id": 1
    },
    {
      "level2_id": 12,
      "name": "Tyres",
      "level1_id": 2
    },
    {
      "level2_id": 13,
      "name": "Tyres Arms",
      "level1_id": 3
    },
    {
      "level2_id": 14,
      "name": "SPORT TRACK",
      "level1_id": 3
    },
    {
      "level2_id": 15,
      "name": "Tyres",
      "level1_id": 4
    },
    {
      "level2_id": 16,
      "name": "Tyres Arms",
      "level1_id": 3
    },
    {
      "level2_id": 17,
      "name": "Tyres Arms",
      "level1_id": 3
    },
    {
      "level2_id": 18,
      "name": "Tyres",
      "level1_id": 4
    },
    {
      "level2_id": 19,
      "name": "Tyres",
      "level1_id": 2
    },
    {
      "level2_id": 20,
      "name": "Tyres Otani",
      "level1_id": 3
    },
    {
      "level2_id": 21,
      "name": "Tyres Otani",
      "level1_id": 3
    },
    {
      "level2_id": 22,
      "name": "Tyres",
      "level1_id": 4
    },
    {
      "level2_id": 23,
      "name": "Tyres Arms",
      "level1_id": 3
    },
    {
      "level2_id": 24,
      "name": "Tyres Jk",
      "level1_id": 5
    },
    {
      "level2_id": 25,
      "name": "Tyres Jk",
      "level1_id": 5
    },
    {
      "level2_id": 26,
      "name": "Tyres Jk",
      "level1_id": 5
    },
    {
      "level2_id": 27,
      "name": "Tyres Jk",
      "level1_id": 1
    },
    {
      "level2_id": 28,
      "name": "Tyres Otani",
      "level1_id": 6
    },
    {
      "level2_id": 29,
      "name": "Tyres Jk",
      "level1_id": 1
    },
    {
      "level2_id": 30,
      "name": "Tyres Jk",
      "level1_id": 5
    },
    {
      "level2_id": 31,
      "name": "Tyres Arms",
      "level1_id": 3
    },
    {
      "level2_id": 32,
      "name": "Tyres Arms",
      "level1_id": 3
    }
  ],
  "level3": [
    {
      "level3_id": 1,
      "level3_code": "0F1687460000000056",
      "name": "ARM-TBR315/80 R22.5/20 156/150K M+S ASM11 TL(T)",
      "level2_id": 1,
      "level1_id": 1
    },
    {
      "level3_id": 2,
      "level3_code": "0F1258000000000022",
      "name": "315/80R22.5 20PR -TRANSTONE TYRE - TT580",
      "level2_id": 2,
      "level1_id": 2
    },
    {
      "level3_id": 3,
      "level3_code": "0F1257350000000009",
      "name": "ARM-205/60 R16 92V BLU-TRAC PC(T)",
      "level2_id": 1,
      "level1_id": 3
    },
    {
      "level3_id": 4,
      "level3_code": "0F1287000000000006",
      "name": "315/80R22.5 20PR SPORTRAK  SP328G+",
      "level2_id": 4,
      "level1_id": 3
    },
    {
      "level3_id": 5,
      "level3_code": "0F1287600000000003",
      "name": "385/65R22.5- KAPSEN HS166 20PR",
      "level2_id": 2,
      "level1_id": 4
    },
    {
      "level3_id": 6,
      "level3_code": "0F1257350000000003",
      "name": "ARM-195/65 R15 95H XL BLU-TRAC PC(T)",
      "level2_id": 1,
      "level1_id": 3
    },
    {
      "level3_id": 7,
      "level3_code": "0F1257350000000021",
      "name": "ARM-215/60 R16 99V XL BLU-TRAC PC(T)",
      "level2_id": 1,
      "level1_id": 3
    },
    {
      "level3_id": 8,
      "level3_code": "0F1287600000000001",
      "name": "11R22.5- KAPSEN S02 16PR",
      "level2_id": 2,
      "level1_id": 4
    },
    {
      "level3_id": 9,
      "level3_code": "0F1250000000000046",
      "name": "12R22.5 18PR TRANSTONE TYRE  TT813",
      "level2_id": 2,
      "level1_id": 2
    },
    {
      "level3_id": 10,
      "level3_code": "0F1810750000000001",
      "name": "OTN- PCR-235/65 R16C/10 121/119R MK2000 TL(T)",
      "level2_id": 6,
      "level1_id": 3
    },
    {
      "level3_id": 11,
      "level3_code": "0F1810750000000002",
      "name": "OTN-PCR-255/70 R15 108T M+S 3PMSF SA3000 BSW TL(T)",
      "level2_id": 6,
      "level1_id": 3
    },
    {
      "level3_id": 12,
      "level3_code": "0F1287600000000008",
      "name": "315/80R22.5- KAPSEN HS268 20 PR",
      "level2_id": 2,
      "level1_id": 4
    },
    {
      "level3_id": 13,
      "level3_code": "0F1257350000000020",
      "name": "ARM-215/55 R17 98W XL BLU-TRAC HP(T)",
      "level2_id": 1,
      "level1_id": 3
    },
    {
      "level3_id": 14,
      "level3_code": "0F1273370000000003",
      "name": "JK-LTB-7.50-16 14PR JETRIB TTF",
      "level2_id": 7,
      "level1_id": 5
    },
    {
      "level3_id": 15,
      "level3_code": "0F1273370000000005",
      "name": "JK-LTB-8.25-16 16PR JM 19 TTF",
      "level2_id": 7,
      "level1_id": 5
    },
    {
      "level3_id": 16,
      "level3_code": "0F1273370000000004",
      "name": "JK-LTB-7.50-16 16PR JETRIB TTF",
      "level2_id": 7,
      "level1_id": 5
    },
    {
      "level3_id": 17,
      "level3_code": "0F1258360000000003",
      "name": "JK-TBR-12R22.5 16PR JETWAY JUL2 TL",
      "level2_id": 7,
      "level1_id": 1
    },
    {
      "level3_id": 18,
      "level3_code": "0F1710600000000010",
      "name": "OTN-OTR- 1400-24/16 G46 TL(T)",
      "level2_id": 6,
      "level1_id": 6
    },
    {
      "level3_id": 19,
      "level3_code": "0F1610590000000002",
      "name": "JK-TBR 315/80R22.5 18PR JUC4 TL-156/150M",
      "level2_id": 7,
      "level1_id": 1
    },
    {
      "level3_id": 20,
      "level3_code": "0F1273370000000001",
      "name": "JK-LTB-7.00-15 10PR JETRIB -TT",
      "level2_id": 7,
      "level1_id": 5
    },
    {
      "level3_id": 21,
      "level3_code": "0F1687460000000073",
      "name": "ARM-285/50 R20 116V XL TRU-TRAC TL(T)",
      "level2_id": 1,
      "level1_id": 3
    },
    {
      "level3_id": 22,
      "level3_code": "0F1257350000000048",
      "name": "ARM-225/65 R17 102H TRU-TRAC AT TL(T)",
      "level2_id": 1,
      "level1_id": 3
    }
  ]
}



const TreeNode = ({ node, fetchChildren, onExpand, onClick }) => {
  const [children, setChildren] = useState(node.children || []);
  const [isLoading, setIsLoading] = useState(false);

  const handleExpand = async () => {
    if (node.expanded) {
      onExpand(node.id, [], false); // Collapse the node
    } else {
      setIsLoading(true);
      try {
        const fetchedChildren = await fetchChildren(node.id, node.level);
        setChildren(fetchedChildren);
        onExpand(node.id, fetchedChildren, true);
      } catch (error) {
        console.error("Error fetching children:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClick = () => {
    // Log all parent details
    const parentDetails = [];
    if (node.level === 3) {
      parentDetails.push({ level: 1, id: node.level1_id });
      parentDetails.push({ level: 2, id: node.level2_id });
    } else if (node.level === 2) {
      parentDetails.push({ level: 1, id: node.parentId });
    }
    parentDetails.push({ level: node.level, id: node.id });

    console.log("Clicked Node Details:", parentDetails);

    if (!node.isLeaf) {
      handleExpand();
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{ cursor: "pointer", margin: "5px 0" }}
      >
        {!node.isLeaf && (node.expanded ? <>&#9660;</> : <>&#9654;</>)} {node.name}
      </div>
      {isLoading && <div>Loading...</div>}
      {node.expanded && (
        <div style={{ marginLeft: "20px" }}>
          {children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              fetchChildren={fetchChildren}
              onExpand={onExpand}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Stage3Hierarchy = () => {
  const [rootNodes, setRootNodes] = useState([]);

  useEffect(() => {
    const initializeTree = async () => {
      const data = data1.level1.map((node) => ({
        id: node.level1_id,
        name: node.name,
        level: 1,
        isLeaf: false,
        expanded: false,
        parentId: null,
      }));
      setRootNodes(data);
    };

    initializeTree();
  }, [data1]);

  const fetchChildren = async (nodeId, level) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let children = [];
        if (level === 1) {
          children = data1.level2
            .filter((item) => item.level1_id === nodeId)
            .map((item) => ({
              id: item.level2_id,
              parentId: item.level1_id,
              name: item.name,
              level: 2,
              isLeaf: false,
              expanded: false,
            }));
        } else if (level === 2) {
          children = data1.level3
            .filter((item) => item.level2_id === nodeId)
            .map((item) => ({
              id: item.level3_id,
              parentId: item.level2_id,
              name: item.name,
              level: 3,
              isLeaf: true,
              expanded: false,
              level1_id: item.level1_id,
              level2_id: item.level2_id,
            }));
        }
        resolve(children);
      }, 300);
    });
  };

  const handleExpand = (nodeId, fetchedChildren, isExpanded) => {
    const updateNode = (node) => {
      if (node.id === nodeId) {
        node.expanded = isExpanded;
        node.children = fetchedChildren.length > 0 ? fetchedChildren : node.children;
      }
      if (node.children) {
        node.children = node.children.map(updateNode);
      }
      return node;
    };

    setRootNodes((prev) =>
      prev.map((rootNode) => updateNode({ ...rootNode }))
    );
  };

  return (
    <div>
      {rootNodes.map((rootNode) => (
        <TreeNode
          key={rootNode.id}
          node={rootNode}
          fetchChildren={fetchChildren}
          onExpand={handleExpand}
          onClick={(node) => console.log(node)}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>TreeView with Multiple Levels</h1>
      <Stage3Hierarchy />
    </div>
  );
}

export default App;
