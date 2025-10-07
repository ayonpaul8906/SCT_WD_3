export const quizData = {
  // =======================================================
  // EASY LEVEL (20 Questions)
  // =======================================================
  easy: [
    // --- Single Select (Easy) ---
    { id: "ess01", type: "single-select-mcq", question: "What does HTML stand for?", options: ["Hyper Tool Markup Language", "Hyper Text Markup Language", "High Tech Multi Language", "Home Terminal Markup Language"], answer: "Hyper Text Markup Language", points: 10 },
    { id: "ess02", type: "single-select-mcq", question: "In programming, what does 'API' stand for?", options: ["Automated Programming Interface", "Application Programming Interface", "Algorithmic Protocol Instance", "Applied Program Interaction"], answer: "Application Programming Interface", points: 10 },
    { id: "ess03", type: "single-select-mcq", question: "What is the SI unit of Force?", options: ["Watt", "Joule", "Newton", "Pascal"], answer: "Newton", points: 10 },
    { id: "ess04", type: "single-select-mcq", question: "Which data structure operates on a 'First-In, First-Out' (FIFO) basis?", options: ["Stack", "Array", "Tree", "Queue"], answer: "Queue", points: 10 },
    { id: "ess05", type: "single-select-mcq", question: "What is the primary purpose of a CPU?", options: ["Store data long-term", "Render graphics", "Execute instructions", "Manage network traffic"], answer: "Execute instructions", points: 10 },

    // --- Image MCQ (Easy) ---
    { id: "eim01", type: "image-mcq", question: "This is the logo of which programming language?", imageUrl: "/python.png", options: ["Java", "C++", "Python", "Ruby"], answer: "Python", points: 10 },
    { id: "eim02", type: "image-mcq", question: "What electronic component is represented by this symbol?", imageUrl: "/resistor.png", options: ["Capacitor", "Diode", "Transistor", "Resistor"], answer: "Resistor", points: 10 },
    { id: "eim03", type: "image-mcq", question: "This diagram represents which type of network topology?", imageUrl: "/star-topology.png", options: ["Ring", "Bus", "Star", "Mesh"], answer: "Star", points: 10 },
    { id: "eim04", type: "image-mcq", question: "What type of logic gate is shown here?", imageUrl: "/and-gate.png", options: ["OR", "NOT", "AND", "XOR"], answer: "AND", points: 10 },
    { id: "eim05", type: "image-mcq", question: "This is the mascot for which version control system?", imageUrl: "/github.png", options: ["SVN", "Mercurial", "Git", "CVS"], answer: "Git", points: 10 },

    // --- Fill in the Blanks (Easy) ---
    { id: "efb01", type: "fill-in-the-blanks", question: "The formula for Ohm's Law is Voltage = Current × ___.", options: ["Power", "Resistance", "Capacitance", "Inductance"], answer: ["Resistance"], points: 10 },
    { id: "efb02", type: "fill-in-the-blanks", question: "In web development, CSS stands for Cascading ___ Sheets.", options: ["Style", "System", "Source", "Scripting"], answer: ["Style"], points: 10 },
    { id: "efb03", type: "fill-in-the-blanks", question: "A function in programming is a block of ___ designed to perform a particular task.", options: ["variables", "data", "code", "comments"], answer: ["code"], points: 10 },
    { id: "efb04", type: "fill-in-the-blanks", question: "The binary equivalent of the decimal number 10 is ___.", options: ["1010", "1100", "0011", "1001"], answer: ["1010"], points: 10 },
    { id: "efb05", type: "fill-in-the-blanks", question: "An object is an instance of a ___.", options: ["function", "variable", "class", "method"], answer: ["class"], points: 10 },

    // --- Multi-Select (Easy) ---
    { id: "ems01", type: "multi-select-mcq", question: "Which of the following are primitive data types in JavaScript?", options: ["String", "Object", "Number", "Array"], answer: ["String", "Number"], points: 10 },
    { id: "ems02", type: "multi-select-mcq", question: "Select the Object-Oriented Programming (OOP) concepts from the list.", options: ["Inheritance", "Variable", "Encapsulation", "Function"], answer: ["Inheritance", "Encapsulation"], points: 10 },
    { id: "ems03", type: "multi-select-mcq", question: "Which of these are layers in the OSI model?", options: ["Session Layer", "Code Layer", "Application Layer", "Interaction Layer"], answer: ["Session Layer", "Application Layer"], points: 10 },
    { id: "ems04", type: "multi-select-mcq", question: "Which of these are valid loop constructs in most programming languages?", options: ["for", "repeat", "while", "next"], answer: ["for", "while"], points: 10 },
    { id: "ems05", type: "multi-select-mcq", question: "Select the components that are part of a standard computer's hardware.", options: ["Operating System", "CPU", "Web Browser", "RAM"], answer: ["CPU", "RAM"], points: 10 }
  ],
  // =======================================================
  // MEDIUM LEVEL (20 Questions)
  // =======================================================
  medium: [
    // --- Single Select (Medium) ---
    { id: "mss01", type: "single-select-mcq", question: "What is the time complexity of a binary search algorithm on a sorted array?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(log n)", points: 20 },
    { id: "mss02", type: "single-select-mcq", question: "Which HTTP status code means 'Not Found'?", options: ["200", "500", "301", "404"], answer: "404", points: 20 },
    { id: "mss03", type: "single-select-mcq", question: "Which sorting algorithm is considered the fastest in the average case?", options: ["Bubble Sort", "Insertion Sort", "Quicksort", "Selection Sort"], answer: "Quicksort", points: 20 },
    { id: "mss04", type: "single-select-mcq", question: "In relational databases, what does SQL stand for?", options: ["Strong Question Language", "Structured Query Language", "Simple Query Logic", "Standardized Query Lexicon"], answer: "Structured Query Language", points: 20 },
    { id: "mss05", type: "single-select-mcq", question: "What is the name of the process of converting a liquid into a gas?", options: ["Condensation", "Sublimation", "Evaporation", "Deposition"], answer: "Evaporation", points: 20 },

    // --- Image MCQ (Medium) ---
    { id: "mim01", type: "image-mcq", question: "This diagram represents which data structure?", imageUrl: "/images/diagrams/linked-list.png", options: ["Queue", "Stack", "Linked List", "Binary Tree"], answer: "Linked List", points: 20 },
    { id: "mim02", type: "image-mcq", question: "What is the output of this logic gate if both inputs are 1?", imageUrl: "/images/symbols/xor-gate.png", options: ["1", "0", "Undefined", "Both 1 and 0"], answer: "0", points: 20 },
    { id: "mim03", type: "image-mcq", question: "This is the logo of which popular JavaScript runtime environment?", imageUrl: "/images/logos/nodejs.png", options: ["Deno", "Bun", "Node.js", "Electron"], answer: "Node.js", points: 20 },
    { id: "mim04", type: "image-mcq", question: "This image shows the structure of which famous molecule?", imageUrl: "/images/diagrams/dna.png", options: ["Methane", "Water", "Benzene", "DNA"], answer: "DNA", points: 20 },
    { id: "mim05", type: "image-mcq", question: "This type of chart, used in project management, is called a ___ chart.", imageUrl: "/images/charts/gantt-chart.png", options: ["Pie", "Gantt", "Bar", "Flow"], answer: "Gantt", points: 20 },

    // --- Fill in the Blanks (Medium) ---
    { id: "mfb01", type: "fill-in-the-blanks", question: "A ___ is a software design pattern that restricts the instantiation of a class to one object.", options: ["Factory", "Singleton", "Observer", "Builder"], answer: ["Singleton"], points: 20 },
    { id: "mfb02", type: "fill-in-the-blanks", question: "The third law of thermodynamics states that the entropy of a system approaches a constant value as the temperature approaches absolute ___.", options: ["zero", "infinity", "one hundred", "equilibrium"], answer: ["zero"], points: 20 },
    { id: "mfb03", type: "fill-in-the-blanks", question: "In networking, DNS stands for ___ Name System.", options: ["Dynamic", "Domain", "Distributed", "Data"], answer: ["Domain"], points: 20 },
    { id: "mfb04", type: "fill-in-the-blanks", question: "Polymorphism is the ability of an object to take on many ___.", options: ["variables", "forms", "classes", "methods"], answer: ["forms"], points: 20 },
    { id: "mfb05", type: "fill-in-the-blanks", question: "A data structure that uses a 'Last-In, First-Out' (LIFO) method is called a ___.", options: ["Queue", "Heap", "Stack", "List"], answer: ["Stack"], points: 20 },

    // --- Multi-Select (Medium) ---
    { id: "mms01", type: "multi-select-mcq", question: "Which of the following are types of NoSQL databases?", options: ["Document", "Relational", "Key-Value", "Graph"], answer: ["Document", "Key-Value", "Graph"], points: 20 },
    { id: "mms02", type: "multi-select-mcq", question: "Select the SOLID principles of object-oriented design.", options: ["Single Responsibility", "Open/Closed", "Data Hiding", "Inheritance Principle"], answer: ["Single Responsibility", "Open/Closed"], points: 20 },
    { id: "mms03", type: "multi-select-mcq", question: "Which of these are transport layer protocols in the TCP/IP model?", options: ["HTTP", "TCP", "IP", "UDP"], answer: ["TCP", "UDP"], points: 20 },
    { id: "mms04", type: "multi-select-mcq", question: "Which of the following are cloud computing service models?", options: ["IaaS", "SaaS", "HTTPaaS", "PaaS"], answer: ["IaaS", "SaaS", "PaaS"], points: 20 },
    { id: "mms05", type: "multi-select-mcq", question: "Select the languages that are statically-typed.", options: ["Python", "Java", "JavaScript", "C++"], answer: ["Java", "C++"], points: 20 }
  ],
  // =======================================================
  // HARD LEVEL (20 Questions)
  // =======================================================
  hard: [
    // --- Single Select (Hard) ---
    { id: "hss01", type: "single-select-mcq", question: "Which design pattern is used to ensure a class has only one instance and provide a global point of access to it?", options: ["Factory Method", "Prototype", "Singleton", "Adapter"], answer: "Singleton", points: 30 },
    { id: "hss02", type: "single-select-mcq", question: "What is the primary function of a semaphore in concurrent programming?", options: ["To store data", "To control access to a shared resource", "To execute code faster", "To define a class"], answer: "To control access to a shared resource", points: 30 },
    { id: "hss03", type: "single-select-mcq", question: "In cryptography, what does RSA stand for?", options: ["Rivest-Shamir-Adleman", "Randomized Security Algorithm", "Rotational Symmetric Algorithm", "Rapid Stream Authentication"], answer: "Rivest-Shamir-Adleman", points: 30 },
    { id: "hss04", type: "single-select-mcq", question: "The CAP theorem in distributed systems states that a system can only have two of which three properties?", options: ["Consistency, Availability, Performance", "Consistency, Availability, Partition Tolerance", "Concurrency, Atomicity, Persistence", "Correctness, Availability, Power"], answer: "Consistency, Availability, Partition Tolerance", points: 30 },
    { id: "hss05", type: "single-select-mcq", question: "What does the 'L' in SOLID principles stand for?", options: ["Layered Abstraction Principle", "Lazy Initialization Principle", "Liskov Substitution Principle", "Low Coupling Principle"], answer: "Liskov Substitution Principle", points: 30 },

    // --- Image MCQ (Hard) ---
    { id: "him01", type: "image-mcq", question: "This diagram represents which software architectural pattern?", imageUrl: "/images/diagrams/microservices.png", options: ["Monolithic", "Client-Server", "Microservices", "Peer-to-Peer"], answer: "Microservices", points: 30 },
    { id: "him02", type: "image-mcq", question: "What is this self-balancing binary search tree called?", imageUrl: "/images/diagrams/red-black-tree.png", options: ["AVL Tree", "B-Tree", "Splay Tree", "Red-Black Tree"], answer: "Red-Black Tree", points: 30 },
    { id: "him03", type: "image-mcq", question: "This diagram illustrates the process of what quantum phenomenon?", imageUrl: "/images/diagrams/quantum-tunneling.png", options: ["Superposition", "Entanglement", "Quantum Tunneling", "Decoherence"], answer: "Quantum Tunneling", points: 30 },
    { id: "him04", type: "image-mcq", question: "This is the structure of a C60 molecule, also known as a Buckyball or ___.", imageUrl: "/images/diagrams/fullerene.png", options: ["Graphene", "Fullerene", "Carbon Nanotube", "Diamond"], answer: "Fullerene", points: 30 },
    { id: "him05", type: "image-mcq", question: "This plot, used in control theory, is known as a ___ plot.", imageUrl: "/images/charts/bode-plot.png", options: ["Nyquist", "Nichols", "Bode", "Root Locus"], answer: "Bode", points: 30 },

    // --- Fill in the Blanks (Hard) ---
    { id: "hfb01", type: "fill-in-the-blanks", question: "In the context of ACID properties for transactions, 'C' stands for ___.", options: ["Concurrency", "Consistency", "Capacity", "Correctness"], answer: ["Consistency"], points: 30 },
    { id: "hfb02", type: "fill-in-the-blanks", question: "Heisenberg's Uncertainty Principle states that one cannot simultaneously know the exact position and ___ of a particle.", options: ["mass", "speed", "momentum", "charge"], answer: ["momentum"], points: 30 },
    { id: "hfb03", type: "fill-in-the-blanks", question: "A regular expression to match a valid email address might start with `^[a-zA-Z0-9._%+-]+@` and end with `___`.", options: ["\\.[a-zA-Z]{2,}$", "[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", "[a-zA-Z0-9.-]*", "\\.com|net|org$"], answer: ["[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"], points: 30 },
    { id: "hfb04", type: "fill-in-the-blanks", question: "___ is a garbage collection strategy where the collector stops the application execution to perform memory cleanup.", options: ["Concurrent", "Generational", "Stop-the-world", "Incremental"], answer: ["Stop-the-world"], points: 30 },
    { id: "hfb05", type: "fill-in-the-blanks", question: "The process of a parent class passing down properties and methods to a child class is known as ___.", options: ["polymorphism", "encapsulation", "abstraction", "inheritance"], answer: ["inheritance"], points: 30 },

    // --- Multi-Select (Hard) ---
    { id: "hms01", type: "multi-select-mcq", question: "Which of the following are steps in the TCP three-way handshake?", options: ["SYN", "ACK", "FIN", "PSH"], answer: ["SYN", "ACK"], points: 30 },
    { id: "hms02", type: "multi-select-mcq", question: "Select the search algorithms that are guaranteed to find the shortest path in a weighted graph.", options: ["Depth-First Search (DFS)", "Dijkstra's Algorithm", "Breadth-First Search (BFS)", "A* Search"], answer: ["Dijkstra's Algorithm", "A* Search"], points: 30 },
    { id: "hms03", type: "multi-select-mcq", question: "Which of these are characteristics of RESTful APIs?", options: ["Stateless", "Stateful", "Client-Server Architecture", "Tight Coupling"], answer: ["Stateless", "Client-Server Architecture"], points: 30 },
    { id: "hms04", type: "multi-select-mcq", question: "Which of the following are considered 'pure' object-oriented programming languages?", options: ["Java", "C++", "Smalltalk", "Ruby"], answer: ["Smalltalk", "Ruby"], points: 30 },
    { id: "hms05", type: "multi-select-mcq", question: "Select the correct statements about Docker containers.", options: ["They run a full guest operating system.", "They share the host OS kernel.", "They are lightweight and portable.", "They are a type of heavyweight virtual machine."], answer: ["They share the host OS kernel.", "They are lightweight and portable."], points: 30 }
  ]
};