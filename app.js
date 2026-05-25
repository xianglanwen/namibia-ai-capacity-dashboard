const policyItems = [
  {
    date: "2021",
    title: "UNESCO Recommendation on the Ethics of AI",
    dimension: "Governance",
    status: "Normative baseline",
    summary:
      "Rights-based reference for follow-up support on accountability, transparency, inclusion, human oversight, and safeguards for public-interest AI.",
    tags: ["AI ethics", "human rights", "governance"],
  },
  {
    date: "2022",
    title: "Southern Africa AI cooperation forum hosted in Namibia",
    dimension: "Research",
    status: "Regional convening",
    summary:
      "Provides a sub-regional entry point for cooperation on AI skills, STEM education, public-sector use cases, disaster risk, youth, and gender equality.",
    tags: ["SADC", "science policy", "regional cooperation"],
  },
  {
    date: "2023-09-05",
    title: "Namibia stakeholder engagement on UNESCO AI ethics implementation",
    dimension: "Governance",
    status: "Readiness process",
    summary:
      "Multi-stakeholder consultation in Windhoek supporting implementation of UNESCO's Readiness Assessment Methodology.",
    tags: ["RAM", "multi-stakeholder", "Windhoek"],
  },
  {
    date: "2024",
    title: "African Union Continental Artificial Intelligence Strategy",
    dimension: "Governance",
    status: "Continental alignment",
    summary:
      "Provides a continental frame for human capital, research ecosystems, data governance, and inclusive AI adoption across African states.",
    tags: ["AU", "human capital", "innovation"],
  },
  {
    date: "2025-08-14",
    title: "Namibia AI Readiness Assessment Report launched",
    dimension: "Infrastructure",
    status: "Evidence baseline",
    summary:
      "UNESCO-supported assessment identifies progress and remaining needs across governance, infrastructure, skills, education, and public awareness.",
    tags: ["NCRST", "UNESCO", "AI readiness"],
  },
  {
    date: "2025",
    title: "AI and rule-of-law training for Namibian lawmakers",
    dimension: "Education",
    status: "Capacity building",
    summary:
      "Illustrates the need for targeted capacity support for policy and legal actors on oversight, evidence, rights, and procurement.",
    tags: ["lawmakers", "public sector", "training"],
  },
  {
    date: "2025",
    title: "Namibia AI stakeholder ecosystem and proposed Responsible AI Institute",
    dimension: "Research",
    status: "Institution building",
    summary:
      "NCRST, UNAM, NUST, and a proposed institute are relevant anchors for coordination, curriculum design, applied pilots, and ethical review capacity.",
    tags: ["NCRST", "universities", "AI institute"],
  },
  {
    date: "2026",
    title: "Inclusion and indigenous knowledge as an AI governance priority",
    dimension: "Inclusion",
    status: "Research opportunity",
    summary:
      "RAM follow-up should account for rural communities, Indigenous knowledge, local languages, public trust, and community participation.",
    tags: ["indigenous knowledge", "inclusion", "local languages"],
  },
];

const audiences = [
  {
    id: "government",
    title: "Government leadership",
    summary: "Cabinet, ministries, regulators, Parliament, judiciary, and national policy coordinators.",
    need: "Strategic capacity to guide AI adoption in line with human rights, transparency, accountability, and national development priorities.",
    gap: "The RAM findings point to the need for a formal AI governance framework, clear institutional roles, and strengthened data protection arrangements.",
    action: "Support a structured governance curriculum covering AI strategy, ethics, procurement, data protection, risk classification, and sector oversight.",
  },
  {
    id: "civil",
    title: "Civil servants",
    summary: "Regional councils, municipalities, frontline service units, statistics, education, health, agriculture, and environment offices.",
    need: "Operational capacity to assess where AI can support service delivery while maintaining human oversight and responsible data practices.",
    gap: "Public institutions require practical guidance on safe use, verification, data handling, procurement, and escalation before AI tools are adopted informally.",
    action: "Develop role-based modules with use cases, verification checklists, privacy safeguards, and clear boundaries for public-sector AI use.",
  },
  {
    id: "citizens",
    title: "Citizens and communities",
    summary: "Youth, rural communities, indigenous groups, civil society, media, parents, and ordinary service users.",
    need: "Public awareness so communities understand AI opportunities, risks, rights, misinformation, and available channels for feedback or redress.",
    gap: "Uneven connectivity, language barriers, limited public awareness, and low trust may reduce equitable participation in AI-enabled services.",
    action: "Use schools, libraries, community radio, youth centres, and local authorities for accessible AI awareness in English and relevant local languages.",
  },
