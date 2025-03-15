export const templates = [
  {
    id: "blank",
    label: "Blank document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <div>
        <h1>Software Development Proposal</h1>
        <p><strong>Prepared for:</strong> [Client Name]</p>
        <p><strong>Prepared by:</strong> [Your Company Name]</p>
        <p><strong>Date:</strong> [Proposal Date]</p>
    </div>

    <div >
        <h2>1. Introduction</h2>
        <p>This proposal outlines the software development services that [Your Company Name] will provide to [Client Name]. The goal is to deliver a high-quality software solution that meets your business needs and objectives.</p>
    </div>

    <div>
        <h2>2. Project Overview</h2>
        <p><strong>Project Name:</strong> [Project Name]</p>
        <p><strong>Project Description:</strong> [Brief description of the project, including objectives and scope.]</p>
        <p><strong>Target Audience:</strong> [Describe the intended users of the software.]</p>
    </div>

    <div >
        <h2>3. Proposed Solution</h2>
        <p><strong>Technology Stack:</strong> [List the technologies, frameworks, and tools to be used.]</p>
        <p><strong>Features:</strong></p>
        <ul>
            <li>[Feature 1]</li>
            <li>[Feature 2]</li>
            <li>[Feature 3]</li>
        </ul>
        <p><strong>Deliverables:</strong></p>
        <ul>
            <li>[Deliverable 1]</li>
            <li>[Deliverable 2]</li>
            <li>[Deliverable 3]</li>
        </ul>
    </div>

    <div >
        <h2>4. Project Timeline</h2>
        <p><strong>Start Date:</strong> [Start Date]</p>
        <p><strong>End Date:</strong> [End Date]</p>
        <p><strong>Milestones:</strong></p>
        <ul>
            <li>[Milestone 1] - [Date]</li>
            <li>[Milestone 2] - [Date]</li>
            <li>[Milestone 3] - [Date]</li>
        </ul>
    </div>

    <div>
        <h2>5. Budget</h2>
        <p><strong>Total Estimated Cost:</strong> [Total Cost]</p>
        <p><strong>Payment Terms:</strong> [Payment schedule and terms.]</p>
    </div>

    <div>
        <h2>6. Terms and Conditions</h2>
        <p>[Include any terms and conditions, such as intellectual property rights, confidentiality, and warranties.]</p>
    </div>

    <div>
        <h2>7. Contact Information</h2>
        <p><strong>Company Name:</strong> [Your Company Name]</p>
        <p><strong>Address:</strong> [Your Address]</p>
        <p><strong>Phone:</strong> [Your Phone Number]</p>
        <p><strong>Email:</strong> [Your Email Address]</p>
        <p><strong>Website:</strong> [Your Website URL]</p>
    </div>

    <div>
        <p>Thank you for considering [Your Company Name] for your software development needs. We look forward to the opportunity to work with you.</p>
    </div>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
     <h1>Project Proposal</h1>
    <p><strong>Client:</strong> [Client Name]</p>
    <p><strong>Project:</strong> [Project Name]</p>
    <p><strong>Objective:</strong> [Brief project goal]</p>
    <p><strong>Scope:</strong> [Key deliverables]</p>
    <p><strong>Timeline:</strong> [Start Date] to [End Date]</p>
    <p><strong>Budget:</strong> [Total Cost]</p>
    <p><strong>Contact:</strong> [Your Email] | [Your Phone]</p>
    <div>Prepared by [Your Name], [Your Company]</div>
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <div>
        <p>[Your Name]</p>
        <p>[Your Position]</p>
        <p>[Your Company]</p>
        <p>[Your Address]</p>
        <p>[City, State, ZIP Code]</p>
        <p>Email: [Your Email]</p>
        <p>Phone: [Your Phone]</p>
    </div>

    <div>
        <p>[Date]</p>
    </div>

    <div>
        <p>[Recipient's Name]</p>
        <p>[Recipient's Position]</p>
        <p>[Recipient's Company]</p>
        <p>[Recipient's Address]</p>
        <p>[City, State, ZIP Code]</p>
    </div>

    <div>
        <p>Dear [Recipient's Name],</p>
    </div>

    <div>
        <p>[First paragraph: Introduce yourself and state the purpose of the letter.]</p>
        <p>[Second paragraph: Provide details, explanations, or supporting information.]</p>
        <p>[Third paragraph: Conclude with a call to action, request, or next steps.]</p>
    </div>

    <div>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
        <p>[Your Position]</p>
    </div>
    `,
  },
  {
    id: "resume",
    label: "resume",
    imageUrl: "/resume.svg",
    initialContent: ` <h1>[Your Name]</h1>
    <p>Email: [Your Email] | Phone: [Your Phone] | LinkedIn: [Your LinkedIn]</p>
    <h2>Professional Summary</h2>
    <p>[Brief summary of your skills and experience]</p>
    <h2>Experience</h2>
    <p><strong>[Job Title]</strong> - [Company Name], [Start Date] - [End Date]</p>
    <p>[Key responsibilities and achievements]</p>
    <h2>Education</h2>
    <p><strong>[Degree]</strong> - [University Name], [Graduation Year]</p>
    <div>References available upon request</div>`,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<p>[Your Name]</p>
    <p>[Your Address] | [Your Email] | [Your Phone]</p>
    <p>[Date]</p>
    <p>[Hiring Manager's Name]</p>
    <p>[Company Name]</p>
    <p>[Company Address]</p>
    <p>Dear [Hiring Manager's Name],</p>
    <p>[First paragraph: Introduce yourself and mention the position you're applying for.]</p>
    <p>[Second paragraph: Highlight your skills and experiences relevant to the job.]</p>
    <p>[Third paragraph: Express enthusiasm and request an interview.]</p>
    <p>Sincerely,</p>
    <p>[Your Name]</p>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Date]</p>
    <p>[Recipient's Name]</p>
    <p>[Recipient's Address]</p>
    <p>Dear [Recipient's Name],</p>
    <p>[Body of the letter]</p>
    <p>Sincerely,</p>
    <p>[Your Name]</p>`,
  },
];
