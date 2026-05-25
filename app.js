const policyItems = [
  {
    date: "2021",
    title: "UNESCO Recommendation on the Ethics of AI",
    dimension: "Governance",
    status: "Normative baseline",
    summary:
      "Rights-based reference for follow-up support on accountability, transparency, inclusion, human oversight, and safeguards for public-interest AI.",
    tags: ["AI ethics", "governance"],
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
    date: "2023",
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
    tags: ["AU", "innovation"],
  },
  {
    date: "2025",
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
    tags: ["NCRST", "AI institute"],
  },
  {
    date: "2026",
    title: "Inclusion and indigenous knowledge as an AI governance priority",
    dimension: "Inclusion",
    status: "Research opportunity",
    summary:
      "RAM follow-up should account for rural communities, Indigenous knowledge, local languages, public trust, and community participation.",
    tags: ["indigenous knowledge"],
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
  {
    id: "education",
    title: "Educators and youth",
    summary: "Schools, teachers, TVET, universities, youth innovation programmes, and coding clubs.",
    need: "A skills pathway from basic digital literacy to AI-adjacent competencies, including data, coding, critical thinking, ethics, and applied problem solving.",
    gap: "The RAM findings highlight AI-related skills gaps; teacher support and learning materials are needed before student-facing initiatives are scaled.",
    action: "Develop teacher guidance, trainer-of-trainers materials, youth coding pathways, TVET micro-credentials, and responsible classroom-use resources.",
  },
  {
    id: "research",
    title: "Private sector and research",
    summary: "UNAM, NUST, NCRST, startups, telecoms, banks, tourism, logistics, mining, agriculture, water, and energy actors.",
    need: "Applied capacity to design, test, procure, and evaluate AI solutions in priority sectors identified in Namibia's readiness process.",
    gap: "The ecosystem requires stronger links between researchers, public institutions, firms, and communities, including attention to local-language data.",
    action: "Develop sector pilots around food security, water, energy, health, education, climate change, mining, logistics, tourism, and digital government.",
  },
];

const componentWeights = {
  connectivityGapIndex: 0.3,
  skillsGapIndex: 0.25,
  distanceIndex: 0.2,
  servicePressureIndex: 0.15,
  ruralShareIndex: 0.1,
};

const componentLabels = {
  connectivityGapIndex: "Connectivity gap",
  skillsGapIndex: "Youth literacy gap",
  distanceIndex: "Distance from Windhoek",
  servicePressureIndex: "Population pressure",
  ruralShareIndex: "Rural population share",
};

const regions = [
  {
    name: "Kunene",
    x: "5%",
    y: "11%",
    w: "23%",
    h: "23%",
    drivers: ["Sparse settlements", "Connectivity and device access", "Rural and indigenous inclusion"],
    gaps: [
      ["Connectivity", "High", "Remote settlements make digital training hard to deliver through standard classroom models."],
      ["Community trust", "High", "AI awareness must address language, consent, and indigenous knowledge safeguards."],
      ["Delivery model", "Medium", "Regional offices need mobile, offline, and radio-compatible materials."],
    ],
    improve: [
      "Start with mobile AI literacy clinics through regional council offices, schools, and community radio.",
      "Pair public AI awareness with indigenous-knowledge protection and data-consent guidance.",
      "Use offline-first training packs and lightweight phone-based exercises rather than laptop-heavy workshops.",
    ],
  },
  {
    name: "Omusati",
    x: "29%",
    y: "7%",
    w: "16%",
    h: "13%",
    drivers: ["Large learner base", "Teacher upskilling", "Northern service demand"],
    gaps: [
      ["Education pipeline", "High", "High learner demand requires teacher-facing AI literacy before student programmes scale."],
      ["Public service", "Medium", "Local offices need practical guidance on AI for records, citizen communication, and verification."],
      ["Infrastructure", "Medium", "Training should assume uneven device access outside town centres."],
    ],
    improve: [
      "Make Omusati a school-facing pilot for teacher AI literacy and safe classroom-use guidance.",
      "Train regional education officers as master trainers for nearby northern regions.",
      "Add simple AI misinformation and exam-integrity modules for students and parents.",
    ],
  },
  {
    name: "Ohangwena",
    x: "46%",
    y: "7%",
    w: "17%",
    h: "13%",
    drivers: ["Youth cohort", "Border-region services", "Teacher pipeline pressure"],
    gaps: [
      ["Youth skills", "High", "Youth demand makes employability-oriented AI literacy more urgent than abstract policy training."],
      ["Border services", "Medium", "Local administration may need translation, document, and public communication workflows."],
      ["Teacher support", "High", "Teachers need guidance before AI tools enter classrooms informally."],
    ],
    improve: [
      "Create youth coding-to-AI bridge workshops through schools, libraries, and TVET-linked partners.",
      "Train local officials on safe use of AI for translation, summarisation, and citizen-facing notices.",
      "Add digital safety, misinformation, and verification modules for cross-border information flows.",
    ],
  },
  {
    name: "Oshana",
    x: "32%",
    y: "21%",
    w: "13%",
    h: "11%",
    drivers: ["Northern urban hub", "Institutional access", "Trainer-of-trainers potential"],
    gaps: [
      ["Trainer capacity", "Medium", "Oshakati-linked institutions can train others but need standardized materials."],
      ["Coordination", "Medium", "The region can coordinate northern pilots if roles and reporting templates are clear."],
      ["Advanced skills", "Medium", "More applied modules are needed beyond basic AI awareness."],
    ],
    improve: [
      "Use Oshana as a northern trainer-of-trainers hub for schools, councils, and public offices.",
      "Host a regional AI helpdesk day for civil servants: approved uses, privacy, and verification.",
      "Build a shared workshop kit that nearby regions can reuse without needing Windhoek-based trainers.",
    ],
  },
  {
    name: "Oshikoto",
    x: "46%",
    y: "21%",
    w: "16%",
    h: "15%",
    drivers: ["Mixed urban-rural profile", "School-to-work skills", "Local administration"],
    gaps: [
      ["Skills pipeline", "Medium", "Youth and school leavers need employability-oriented AI skills."],
      ["Public administration", "Medium", "Local offices need safe-use rules for documents, records, and public messages."],
      ["Rural reach", "Medium", "Training should be split between hub sessions and outreach."],
    ],
    improve: [
      "Create local administration modules for document drafting, data protection, and human review.",
      "Connect school AI literacy to agriculture, environment, and SME examples relevant to the region.",
      "Use hub-and-spoke workshops so rural schools and offices are not left out.",
    ],
  },
  {
    name: "Kavango West",
    x: "63%",
    y: "16%",
    w: "16%",
    h: "16%",
    drivers: ["Rural inclusion", "Institutional distance", "Connectivity constraints"],
    gaps: [
      ["Connectivity", "High", "Training must work where internet and devices are inconsistent."],
      ["Institutional access", "High", "Distance from national AI institutions increases dependency on visiting trainers."],
      ["Public awareness", "High", "Citizens need basic AI rights, misinformation, and grievance-channel awareness."],
    ],
    improve: [
      "Prioritize offline-first AI literacy packs for schools and public offices.",
      "Train a small regional cohort as permanent AI focal points rather than one-off workshop attendees.",
      "Use radio and community meetings for public AI awareness, not only online campaigns.",
    ],
  },
  {
    name: "Kavango East",
    x: "80%",
    y: "17%",
    w: "16%",
    h: "16%",
    drivers: ["Rundu service hub", "Large learner base", "Digital skills gap"],
    gaps: [
      ["Civil service", "High", "Rundu can serve as a hub, but frontline officials need practical safe-use training."],
      ["Youth skills", "High", "AI capacity should link to employability and local problem-solving."],
      ["Data practices", "Medium", "Public offices need routines for data quality, privacy, and verification."],
    ],
    improve: [
      "Run a regional civil-service AI readiness bootcamp in Rundu.",
      "Create youth AI challenge projects around agriculture, water, education, and service access.",
      "Make Rundu a relay hub for Kavango West and Zambezi training teams.",
    ],
  },
  {
    name: "Zambezi",
    x: "80%",
    y: "34%",
    w: "15%",
    h: "15%",
    drivers: ["Border-region inclusion", "Disaster-risk communication", "Distance from capital institutions"],
    gaps: [
      ["Connectivity", "High", "Public-facing AI literacy must account for low and uneven household access."],
      ["Risk communication", "High", "Flood, environment, agriculture, and public-service messaging need trusted channels."],
      ["Inclusion", "High", "Language and border-community realities make generic national messaging insufficient."],
    ],
    improve: [
      "Pilot responsible AI for disaster-risk communication, agriculture extension, and local service notices.",
      "Use local-language public awareness through radio, schools, and regional authorities.",
      "Train officials to verify AI-generated messages before public release.",
    ],
  },
  {
    name: "Erongo",
    x: "17%",
    y: "36%",
    w: "20%",
    h: "18%",
    drivers: ["Port and industry", "Better infrastructure", "Applied sector pilots"],
    gaps: [
      ["Sector adoption", "Medium", "The gap is less basic access and more responsible applied use in logistics, tourism, and marine services."],
      ["Procurement", "Medium", "Municipalities and industry need AI procurement and vendor-evaluation capacity."],
      ["Workforce transition", "Medium", "Workers need reskilling for AI-assisted operations."],
    ],
    improve: [
      "Run applied AI short courses for logistics, port services, tourism, municipalities, and marine monitoring.",
      "Build a public-private pilot on AI procurement, auditability, and workforce reskilling.",
      "Use Erongo as a reference case for sector-specific responsible AI use cases.",
    ],
  },
  {
    name: "Otjozondjupa",
    x: "38%",
    y: "38%",
    w: "22%",
    h: "18%",
    drivers: ["Transport corridor", "Mixed settlements", "Data-governance training"],
    gaps: [
      ["Public procurement", "Medium", "Officials need capacity to evaluate AI tools and vendor claims."],
      ["Data governance", "Medium", "Local datasets and records need quality, privacy, and retention rules."],
      ["Outreach", "Medium", "Training must serve both corridor towns and more dispersed communities."],
    ],
    improve: [
      "Pilot AI procurement and data-governance training for regional officials.",
      "Use transport, agriculture, and public works examples rather than generic AI case studies.",
      "Create a regional checklist for when AI outputs require human verification.",
    ],
  },
  {
    name: "Omaheke",
    x: "61%",
    y: "48%",
    w: "22%",
    h: "22%",
    drivers: ["Sparse settlements", "Indigenous inclusion", "Connectivity constraints"],
    gaps: [
      ["Inclusion", "High", "AI literacy must protect local languages, cultural knowledge, and community consent."],
      ["Connectivity", "High", "Standard online training will miss dispersed communities."],
      ["Public trust", "High", "Citizens need clear rights and complaint channels before AI enters service delivery."],
    ],
    improve: [
      "Frame Omaheke as the indigenous-knowledge and responsible-data pilot.",
      "Use community-based workshops with local-language explainers and consent scenarios.",
      "Train public officials on what data should not be collected, uploaded, or automated.",
    ],
  },
  {
    name: "Khomas",
    x: "34%",
    y: "58%",
    w: "19%",
    h: "16%",
    drivers: ["Capital institutions", "Universities", "Policy coordination"],
    gaps: [
      ["Coordination", "Medium", "Khomas has institutions, but national mandates and handoffs need structure."],
      ["Advanced governance", "Medium", "Policy actors need training on risk classification, procurement, audits, and rights impact assessment."],
      ["National equity", "Low", "Windhoek-based capacity must be designed to serve regions, not absorb the whole agenda."],
    ],
    improve: [
      "Make Khomas the national master-trainer and policy-lab hub.",
      "Train Parliament, judiciary, regulators, procurement teams, and ministry focal points first.",
      "Require every Windhoek-led programme to produce reusable materials and regional rollout plans.",
    ],
  },
  {
    name: "Hardap",
    x: "31%",
    y: "75%",
    w: "23%",
    h: "14%",
    drivers: ["Rural service access", "TVET potential", "Distance from AI institutions"],
    gaps: [
      ["TVET pathway", "Medium", "AI training should connect to practical skills rather than university-only pathways."],
      ["Local government", "Medium", "Councils need safe-use guidance for communications, records, and planning."],
      ["Sector relevance", "Medium", "Agriculture, water, and local enterprise examples should lead the curriculum."],
    ],
    improve: [
      "Create TVET-linked AI micro-modules for data, office automation, agriculture, and water use cases.",
      "Train local authorities on AI-assisted planning with privacy and verification safeguards.",
      "Use Hardap as a southern outreach node connected to //Kharas.",
    ],
  },
  {
    name: "//Kharas",
    x: "28%",
    y: "90%",
    w: "30%",
    h: "8%",
    drivers: ["Southern distance", "Energy and mining use cases", "Skills conversion"],
    gaps: [
      ["Sector skills", "Medium", "Green hydrogen, mining, environment, and logistics need applied AI literacy."],
      ["Distance", "Medium", "National workshops in Windhoek will not build durable southern capacity alone."],
      ["Public oversight", "Medium", "Communities need awareness of AI risks in employment, environment, and service delivery."],
    ],
    improve: [
      "Pilot AI for energy, mining safety, environmental monitoring, and local administration.",
      "Create a southern regional training hub with industry and local authority participation.",
      "Add worker-reskilling and community-risk communication modules.",
    ],
  },
];

const policyList = document.querySelector("#policyList");
const trackerCount = document.querySelector("#trackerCount");
const searchInput = document.querySelector("#searchInput");
const dimensionFilter = document.querySelector("#dimensionFilter");
const regionMap = document.querySelector("#regionMap");
const regionDetail = document.querySelector("#regionDetail");
const highestPriority = document.querySelector("#highestPriority");
const highestPriorityText = document.querySelector("#highestPriorityText");
const copyBriefButton = document.querySelector("#copyBriefButton");
const audienceGrid = document.querySelector("#audienceGrid");
const audienceDetail = document.querySelector("#audienceDetail");

let actualIndicators = {};
let selectedRegion = regions[0];
let selectedAudience = audiences[0];

initDashboard();

searchInput.addEventListener("input", renderPolicyList);
dimensionFilter.addEventListener("change", renderPolicyList);
copyBriefButton.addEventListener("click", copyBriefingNote);

async function initDashboard() {
  actualIndicators = await fetch("namibia-ai-actual-indicators.json").then((response) => response.json());
  selectedRegion = regions.reduce((top, region) => (scoreFor(region) > scoreFor(top) ? region : top), regions[0]);
  renderAudience();
  renderPolicyList();
  await renderMap();
  renderRegionDetail(selectedRegion);
  renderHeadline();
}

function renderAudience() {
  audienceGrid.innerHTML = audiences
    .map(
      (audience) => `
        <button class="audience-card${audience.id === selectedAudience.id ? " active" : ""}" type="button" data-audience="${audience.id}">
          <strong>${audience.title}</strong>
          <span>${audience.summary}</span>
        </button>
      `,
    )
    .join("");

  audienceGrid.querySelectorAll(".audience-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedAudience = audiences.find((audience) => audience.id === card.dataset.audience);
      renderAudience();
    });
  });

  audienceDetail.innerHTML = `
    <div class="audience-detail-box"><b>Capacity need</b><p>${selectedAudience.need}</p></div>
    <div class="audience-detail-box"><b>Current gap</b><p>${selectedAudience.gap}</p></div>
    <div class="audience-detail-box"><b>Best intervention</b><p>${selectedAudience.action}</p></div>
  `;
}

function renderPolicyList() {
  const query = searchInput.value.trim().toLowerCase();
  const dimension = dimensionFilter.value;

  const filtered = policyItems.filter((item) => {
    const matchesDimension = dimension === "all" || item.dimension === dimension;
    const searchable = [item.title, item.dimension, item.status, item.summary, ...item.tags].join(" ").toLowerCase();
    return matchesDimension && (!query || searchable.includes(query));
  });

  trackerCount.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
  policyList.innerHTML = filtered
    .map(
      (item) => `
        <article class="policy-card" data-dimension="${item.dimension}">
          <div class="policy-topline">
            <div>
              <p class="policy-title">${item.title}</p>
              <p class="policy-summary">${item.summary}</p>
            </div>
            <span class="policy-date">${item.date}</span>
          </div>
          <div class="tags">
            <span class="tag">${item.dimension}</span>
            <span class="tag">${item.status}</span>
            ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

async function renderMap() {
  regionMap.innerHTML = "<div class=\"map-note\">Loading Namibia regional boundaries...</div>";
  const geojson = await fetch("namibia-regions-14.geojson").then((response) => response.json());
  const width = 650;
  const height = 430;
  const padding = 18;
  const bounds = getBounds(geojson.features);
  const scale = Math.min((width - padding * 2) / (bounds.maxX - bounds.minX), (height - padding * 2) / (bounds.maxY - bounds.minY));
  const mapWidth = (bounds.maxX - bounds.minX) * scale;
  const mapHeight = (bounds.maxY - bounds.minY) * scale;
  const offsetX = (width - mapWidth) / 2;
  const offsetY = (height - mapHeight) / 2;
  const project = ([x, y]) => [
    offsetX + (x - bounds.minX) * scale,
    height - offsetY - (y - bounds.minY) * scale,
  ];

  const shapes = geojson.features
    .map((feature) => {
      const rawName = feature.properties.NAME_;
      const regionName = normalizeRegionName(rawName);
      const region = regions.find((item) => item.name === regionName);
      if (!region) return "";
      const score = scoreFor(region);
      const level = levelFor(score);
      const centroid = featureCentroid(feature, project);
      return `
        <g>
          <path
            class="region-shape ${level}${region.name === selectedRegion.name ? " active" : ""}"
            d="${featurePath(feature, project)}"
            fill="${colorForLevel(level)}"
            data-region="${region.name}"
            tabindex="0"
            role="button"
            aria-label="${region.name}, ${level} need signal, index value ${score}"
          ></path>
          <text class="region-label" x="${centroid[0]}" y="${centroid[1]}">${shortRegionLabel(region.name)}</text>
        </g>
      `;
    })
    .join("");

  regionMap.innerHTML = `<svg viewBox="0 0 ${width} ${height}" aria-label="Namibia regional AI capacity priority map">${shapes}</svg>`;

  regionMap.querySelectorAll(".region-shape").forEach((shape) => {
    const selectRegion = () => {
      selectedRegion = regions.find((region) => region.name === shape.dataset.region);
      renderMap();
      renderRegionDetail(selectedRegion);
    };
    shape.addEventListener("click", selectRegion);
    shape.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRegion();
      }
    });
  });
}

function renderRegionDetail(region) {
  const score = scoreFor(region);
  const level = levelFor(score);
  const indicators = actualIndicators[region.name];
  const components = indicators.components;
  const raw = indicators.raw;
  regionDetail.innerHTML = `
    <div class="score">
      <p class="eyebrow">${level} need signal</p>
      <strong>${score}</strong>
      <div class="bar" aria-hidden="true"><span style="--score:${score}%"></span></div>
    </div>
    <h3>${region.name}</h3>
    <div class="component-grid" aria-label="score components">
      ${Object.entries(componentWeights)
        .map(
          ([key, weight]) => `
            <div class="component-row">
              <span>${componentLabels[key]}</span>
              <div class="mini-bar" aria-hidden="true"><span style="--value:${components[key].toFixed(1)}%"></span></div>
              <span>${components[key].toFixed(1)}</span>
            </div>
          `,
        )
        .join("")}
    </div>
    <ul class="detail-list">
      <li><b>Underlying indicators</b>
        Internet browsing: ${raw.internetBrowsingPct.toFixed(1)}%;
        smartphone ownership: ${raw.smartphoneOwnershipPct.toFixed(1)}%;
        youth literacy: ${raw.youthLiteracyPct.toFixed(1)}%;
        population: ${raw.population2023.toLocaleString("en-US")};
        rural population: ${raw.ruralPopulationPct.toFixed(1)}%;
        distance from Windhoek: ${raw.distanceFromWindhoekKm.toFixed(0)} km.
      </li>
    </ul>
    <ul class="detail-list">
      <li><b>Main gap drivers</b>${region.drivers.join(", ")}</li>
    </ul>
    <div class="gap-grid">
      ${region.gaps
        .map(
          ([label, severity, description]) => `
            <div class="gap-box" data-severity="${severity}">
              <b>${label} - ${severity}</b>
              <p>${description}</p>
            </div>
          `,
        )
        .join("")}
    </div>
    <ul class="detail-list">
      <li><b>Possible follow-up</b>${region.improve.join(" ")}</li>
    </ul>
  `;
}

function renderHeadline() {
  const top = [...regions].sort((a, b) => scoreFor(b) - scoreFor(a))[0];
  highestPriority.textContent = top.name;
  highestPriorityText.textContent = `${top.name} shows the strongest need signal in this view, based on connectivity, youth literacy, distance from Windhoek, population pressure, and rural population share.`;
}

async function copyBriefingNote() {
  const highPriority = regions
    .filter((region) => levelFor(scoreFor(region)) === "high")
    .map((region) => region.name)
    .join(", ");

  const note = `Namibia AI Capacity-Building Tracker - summary note

Core framing: AI capacity building should be treated as a layered readiness issue across government leadership, civil servants, citizens and communities, educators and youth, and private-sector/research actors.

Core finding: Namibia has an active AI governance window after the UNESCO-supported AI Readiness Assessment. Follow-up support should focus on translating readiness findings into implementation capacity.

Regions showing the strongest need signal in this view: ${highPriority}.

Suggested use: support internal discussion on where AI literacy, public-sector guidance, infrastructure-sensitive outreach, and inclusion measures may require additional focus.`;

  await navigator.clipboard.writeText(note);
  copyBriefButton.textContent = "Copied";
  copyBriefButton.classList.add("copied");
  window.setTimeout(() => {
    copyBriefButton.textContent = "Copy summary note";
    copyBriefButton.classList.remove("copied");
  }, 1500);
}

function scoreFor(region) {
  return actualIndicators[region.name]?.score ?? 0;
}

function levelFor(score) {
  if (score >= 55) return "high";
  if (score >= 40) return "medium";
  return "low";
}

function colorForLevel(level) {
  if (level === "high") return "#b84a3a";
  if (level === "medium") return "#b7791f";
  return "#2f7d4f";
}

function normalizeRegionName(name) {
  if (name === "Karas") return "//Kharas";
  return name;
}

function shortRegionLabel(name) {
  return name.replace("Kavango ", "K. ");
}

function getBounds(features) {
  const points = features.flatMap((feature) => collectPoints(feature.geometry.coordinates));
  return points.reduce(
    (bounds, [x, y]) => ({
      minX: Math.min(bounds.minX, x),
      minY: Math.min(bounds.minY, y),
      maxX: Math.max(bounds.maxX, x),
      maxY: Math.max(bounds.maxY, y),
    }),
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );
}

function collectPoints(coordinates) {
  if (typeof coordinates[0] === "number") return [coordinates];
  return coordinates.flatMap(collectPoints);
}

function featurePath(feature, project) {
  const polygons = feature.geometry.type === "MultiPolygon" ? feature.geometry.coordinates : [feature.geometry.coordinates];
  return polygons
    .map((polygon) =>
      polygon
        .map((ring) =>
          ring
            .map((point, index) => {
              const [x, y] = project(point);
              return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
            })
            .join(" ") + " Z",
        )
        .join(" "),
    )
    .join(" ");
}

function featureCentroid(feature, project) {
  const projected = collectPoints(feature.geometry.coordinates).map(project);
  const bounds = projected.reduce(
    (box, [x, y]) => ({
      minX: Math.min(box.minX, x),
      minY: Math.min(box.minY, y),
      maxX: Math.max(box.maxX, x),
      maxY: Math.max(box.maxY, y),
    }),
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );
  return [(bounds.minX + bounds.maxX) / 2, (bounds.minY + bounds.maxY) / 2];
}
