import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Myren Sutton - Bioinformatics and Biomedical Engineer",
  author: "Myren DeShawn Sutton",
  description: "Hello!",
  lang: "en",
  siteLogo: "/tinyhead.png",
  navLinks: [
    { text: "Education", href: "#education" },
    { text: "Experience", href: "#experience" },
    { text: "Involvement", href: "#involvement" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Presentations", href: "#presentations" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/myren-sutton-ab233221b" },
    { text: "Github", href: "https://github.com/ddsnph" },
  ],
  socialImage: "",
  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Myren Sutton",
    specialty: "Bioinformatics | Biomedical Engineering | Biological Engineering",
    summary:
      "I'm Myren Sutton, a biomedical engineer and bioinformatics researcher passionate about leveraging machine learning, genomic data analysis, and innovative design to address critical healthcare challenges. I'm actively seeking employment opportunities in bioinformatics, data science, and healthcare technology following my Master's graduation, aiming to create impactful and inclusive medical solutions.",
    email: "myrensutton@gmail.com",
  },
  education: [
    {
      institution: "University of Missouri - Columbia",
      degree: "MS Biological Engineering",
      startDate: "",
      endDate: "May 2026",
    },
    {
      institution: "University of Missouri - Columbia",
      degree: "BS Biomedical Engineering",
      track: "Bioinformatics",
      startDate: "",
      endDate: "",
      gpa: "3.76/4.0",
      honors: "College of Engineering Dean's High Honor List",
    },
  ],
  experience: [
    {
      company: "University of Missouri - Columbia",
      position: "Teaching Assistant (TA)",
      startDate: "August 2025",
      endDate: "Present",
      summary: [
        "Lead and assist with lectures and classroom discussions to support student learning and engagement.",
        "Prepare quizzes and instructional materials in alignment with course objectives.",
        "Grade assignments and assessments, providing constructive feedback to students.",
        "Offer tutoring and hold regular office hours to provide academic support and address student questions.",
        "TA'd Fluid Mechanics for Biomedical Engineers and MATLAB.",
      ],
    },
    {
      company: "Pfizer Pharmaceuticals",
      position: "Research & Development Intern",
      startDate: "June 2025",
      endDate: "August 2025",
      summary: [
        "Collaborated within the upstream bioprocessing research and development division to design and implement workflows that increase experimental efficiency.",
        "Developed proficiency in Visual Basic, advanced Excel function, and integrating block-based code with written scripting to support process optimization within an automated liquid handler.",
      ],
    },
    {
      company: "University of Missouri - Columbia",
      position: "Residential Advisor",
      startDate: "August 2023",
      endDate: "Present",
      summary: [
        "Led a supportive living environment, enforced housing policies, provided mentorship, crisis response, and resource access to ensure over 700+ resident's well-being and safety within a team of 22+ residential advisors.",
      ],
    },
    {
      company: "University of Missouri - Columbia | Dr. Praveen Rao Scalable Data Science Lab",
      position: "Bioinformatics Research Intern",
      startDate: "May 2023",
      endDate: "Present",
      summary: [
        "Investigating findings from clustering COVID-19 patient's genomic variants using a Transformer model.",
        "Developing a robust pipeline for raw DNA sequences to produce variant calling files (VCFs).",
        "Applying genomic data to an NLP transformer to present patterns within the data.",
        "Utilizing Jupyter Notebook and RealVNC Viewer with GPUs for larger data analysis.",
        "Implementing methods for interactive and comprehensible clustering results.",
        "Presented findings at multiple national research forums, including ABRCMS and Mizzou research conferences.",
      ],
    },
    {
      company: "University of Missouri - Columbia | Dr. Trupti Joshi Research Lab",
      position: "Bioinformatics Research Assistant",
      startDate: "August 2021",
      endDate: "May 2022",
      summary: [
        "Understood how to utilize the R programming language for data analysis.",
        "Operated with the soybean genome to test and display a new data visualization library within R and R Shiny.",
        "Attended weekly seminars with another lab, highlighting new technology in Bioinformatics.",
      ],
    },
  ],
  involvement: [
    {
      organization: "National Society of Black Engineers (NSBE)",
      role: "Technical Outreach Community Help (TORCH) Chair",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Coordinate and volunteer for classroom training and community service projects to make science and engineering accessible and engaging.",
        "Lead and participate in STEM outreach events for the youth, organizing hands-on workshops and activities.",
        "Attend bi-weekly meetings to discuss opportunities and events for the community of engineers on campus.",
        "Provide study sessions to help students understand their classes better.",
        "Organize Fall conference as a networking opportunity for students to meet professionals in their discipline.",
      ],
    },
    {
      organization: "Maximizing Access to Research Careers (MARC/IMSD)",
      role: "Fellow",
      startDate: "September 2021",
      endDate: "May 2025",
      summary: [
        "Attend weekly meetings to learn more about the research field and upcoming research opportunities.",
        "Gain insight on how to adequately prepare for graduate school and PhD Programs.",
      ],
    },
  ],
  skills: {
    languages: ["Java/JavaScript", "HTML/CSS", "C/SQL/MATLAB", "Python/R", "Bash/Terminal"],
    software: ["SolidWorks", "Microsoft Office", "Jupyter Notebook", "RealVNC Viewer", "LabVIEW"],
    libraries: ["ML Libraries", "NumPy", "pandas", "scikit-learn", "NetworkX", "Matplotlib", "Seaborn", "R Shiny"],
  },
  projects: [
    {
      name: "Wound Measurement App",
      summary: "Designing and collaborating with a plastic surgeon to create an app for accurate wound measurement assessment using Machine Learning technology. Meeting a need on the University of Missouri - Columbia campus to track healthy wound healing. Using programming applications to create a mobile app for easy accessibility by healthcare professionals.",
      timeline: "December 2024 - Present",
      image: "/wound-measurement.png",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Genome Variant Calling & Phylogeny Pipeline",
      summary: "Retrieved paired tumor/normal FASTQ from SRA using SRA Toolkit and automated gzip compression and cleanup. Indexed GRCh38 reference and VCFs; aligned reads with BWA-MEM, processed BAMs with SAMtools and Picard, and called variants with GATK HaplotypeCaller. Applied Base Quality Score Recalibration and tranche filtering to generate high confidence VCFs. Parallelized a 20 sample workflow on CloudLab infrastructure using GNU Parallel. Constructed phylogenetic trees from per sample VCFs to characterize mutational relationships.",
      timeline: "April 2025 - May 2025",
      image: "/genome-pipeline.png",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Structural Neuroinformatics of Chess Grandmasters",
      summary: "Architected a neuroimaging data pipeline using Git Bash and SSH to orchestrate secure data transfers and processing on remote Fabric slices. Converted raw DICOM scans to BIDS compliant NIfTI datasets with a custom PowerShell script, ensuring standardized directory structures and metadata integrity. Leveraged FreeSurfer on cloud-based Fabric virtual machines for automated cortical reconstruction, followed by morphometric feature extraction. Constructed Morphometric Similarity Networks (MSNs) using NumPy and pandas, applying Z-score normalization and Pearson correlation to generate 2,278 dimensional connectivity fingerprints. Applied scikit-learn's k-means clustering with silhouette analysis to identify structural subgroups, demonstrating expert cohort homogeneity. Employed NetworkX to compute graph theoretical metrics, global/local efficiency, clustering coefficient, degree centrality, validating robust network topology across thresholds. Visualized complex network data using Matplotlib and Seaborn, producing figures for modular community structures. Automated end to end analysis on Google Colab and Fabric slices, optimizing compute resource allocation and parallel processing. Ensured reproducibility and scalability through comprehensive documentation, automated BIDS validation, and integration of cloud computing.",
      timeline: "January 2025 - May 2025",
      image: "/neuroinformatics.png",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Pulse Oximetry Measurement",
      summary: "Designed and calibrated pulse oximeter circuitry with LEDs and photodiode sensors, using analog and digital filtering in LabVIEW to process pulse signals. Gained experience in biomedical instrumentation and real-time data acquisition for health monitoring applications.",
      timeline: "October 2024 - December 2024",
      image: "/pulse-oximetry.png",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Custom 3D Printed Splints",
      summary: "Developed a customizable, eco-friendly splint using 3D scanning and medical-grade ASA for rapid production within a team of four. Implemented CAD design and evaluated advanced scanning options to achieve precise and non-invasive measurements.",
      timeline: "August 2024 - December 2024",
      image: "/3d-splints.png",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Production-Scale Variant Calling Workflow",
      summary: "Designed and implemented an automated, reproducible variant calling pipeline. Utilized Nextflow DSL2 and supported various bioinformatics tools and processes, including reference genome indexing, paired-end alignment (using bwa), BAM sorting/indexing (using samtools), and SNP/indel detection (using bcftools, tabix).",
      timeline: "June 2025 - August 2025",
      image: "/variant-calling.png",
      linkPreview: "/",
      linkSource: "/",
    },
  ],
  presentations: [
    {
      title: "Clustering Genomic Variants of COVID-19 Patients Using Transformers",
      authors: "Myren DeShawn Sutton, Praveen Rao",
      event: "Annual Biomedical Research Conference for Minoritized Students (ABRCMS)",
      date: "November 2023",
      location: "Phoenix, Arizona",
    },
    {
      title: "Clustering Genomic Variants of COVID-19 Patients Using Transformers",
      authors: "Myren DeShawn Sutton, Praveen Rao",
      event: "Mizzou Show Me Research Week",
      date: "April 2024",
      location: "Columbia, Missouri",
    },
    {
      title: "Clustering Genomic Variants of People with COVID-19 Using Transformers",
      authors: "Myren DeShawn Sutton, Praveen Rao",
      event: "Annual Biomedical Research Conference for Minoritized Students (ABRCMS)",
      date: "November 2024",
      location: "Pittsburgh, Pennsylvania",
    },
    {
      title: "Designed Workflow of a Custom 3D-Printed Splint",
      authors: "Myren DeShawn Sutton, Campbell Breiler, Layni Kennell, Nicholas Wiedemann",
      event: "3D Printing Presentation",
      date: "December 2024",
      location: "Columbia, Missouri",
    },
    {
      title: "Clustering Genomic Variants of People with COVID-19 Using Transformers",
      authors: "Myren DeShawn Sutton, Praveen Rao",
      event: "Mizzou Show Me Research Week",
      date: "April 2025",
      location: "Columbia, Missouri",
    },
  ],
  about: {
    description: `
 Hi, I'm Myren Sutton! I'm a bioinformatics researcher and biomedical engineer passionate about using data to solve real world healthcare problems. My work focuses on combining machine learning, bioinformatics, and practical engineering to create tools that actually make a difference for patients.

I've designed and developed projects ranging from clustering genomic variants of COVID-19 patients with transformer models to creating affordable, eco-friendly 3D-printed medical splints. I'm proficient in Python, R, MATLAB, and SolidWorks, and enjoy applying these skills to innovative medical technologies.

Ultimately, I'm driven to make healthcare more inclusive and effective through thoughtful, data driven design.
    `,
    image: "/profilePhoto.png",
  },
};

// #5755ff
