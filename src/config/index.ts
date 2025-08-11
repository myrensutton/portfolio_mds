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
      "I'm Myren Sutton, a biomedical engineer and bioinformatics researcher passionate about leveraging machine learning, genomic data analysis, and innovative design to address critical healthcare challenges. I'm actively seeking employment opportunities in bioinformatics, engineering, and the healthcare field following my Master's graduation, aiming to create impactful and inclusive medical solutions.",
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
      name: "Production Scale Variant Calling Workflow",
      summary: "I designed and implemented an automated, reproducible variant calling pipeline that streamlines genomic analysis workflows. The system utilizes Nextflow DSL2 to orchestrate various bioinformatics tools and processes, including reference genome indexing, paired-end alignment using bwa, BAM sorting and indexing with samtools, and SNP/indel detection through bcftools and tabix. This scalable solution ensures consistent, high-quality variant calling across large datasets while maintaining reproducibility and computational efficiency.",
      timeline: "June 2025 - August 2025",
      image: "/production.png",
      linkPreview: "https://github.com/ddsnph/Production-Scale-Variant_Calling",
      linkSource: "https://github.com/ddsnph/Production-Scale-Variant_Calling",
    },
    {
      name: "Genome Variant Calling & Phylogeny Pipeline",
      summary: "I developed a comprehensive genomic analysis pipeline that processes paired tumor/normal FASTQ files retrieved from SRA using the SRA Toolkit, with automated gzip compression and cleanup procedures. The workflow includes indexing GRCh38 reference and VCFs, aligning reads with BWA-MEM, processing BAMs with SAMtools and Picard, and calling variants with GATK HaplotypeCaller. I implemented Base Quality Score Recalibration and tranche filtering to generate high-confidence VCFs, then parallelized a 20-sample workflow on CloudLab infrastructure using GNU Parallel. The final step involved constructing phylogenetic trees from per-sample VCFs to characterize mutational relationships and evolutionary patterns.",
      timeline: "April 2025 - May 2025",
      image: "/phylo.png",
      linkPreview: "https://github.com/ddsnph/fastq_to_Phylogeny_Analysis",
      linkSource: "https://github.com/ddsnph/fastq_to_Phylogeny_Analysis",
    },
    {
      name: "Structural Neuroinformatics of Chess Grandmasters",
      summary: "I architected a sophisticated neuroimaging data pipeline that orchestrates secure data transfers and processing on remote Fabric slices using Git Bash and SSH protocols. The system converts raw DICOM scans to BIDS-compliant NIfTI datasets through a custom PowerShell script, ensuring standardized directory structures and metadata integrity. I leveraged FreeSurfer on cloud-based Fabric virtual machines for automated cortical reconstruction and morphometric feature extraction, then constructed Morphometric Similarity Networks using NumPy and pandas with Z-score normalization and Pearson correlation to generate 2,278-dimensional connectivity fingerprints. The analysis applied scikit-learn's k-means clustering with silhouette analysis to identify structural subgroups, demonstrating expert cohort homogeneity, while NetworkX computed graph theoretical metrics including global/local efficiency, clustering coefficient, and degree centrality to validate robust network topology across thresholds. I visualized complex network data using Matplotlib and Seaborn to produce figures for modular community structures, and automated the entire end-to-end analysis on Google Colab and Fabric slices to optimize compute resource allocation and parallel processing. The project ensures reproducibility and scalability through comprehensive documentation, automated BIDS validation, and seamless cloud computing integration.",
      timeline: "January 2025 - May 2025",
      image: "/fMRI.png",
      linkPreview: "https://github.com/ddsnph/MRI-Brain-Network-Analysis-with-Morphometric-Similarity-Networks",
      linkSource: "https://github.com/ddsnph/MRI-Brain-Network-Analysis-with-Morphometric-Similarity-Networks",
    },
    {
      name: "Wound Measurement App",
      summary: "I'm currently collaborating with a plastic surgeon to design and develop a mobile application for accurate wound measurement assessment using Machine Learning technology. This project addresses a critical need on the University of Missouri - Columbia campus for tracking healthy wound healing progression. The app utilizes advanced programming applications to create an intuitive, accessible platform that healthcare professionals can easily use in clinical settings, ultimately improving patient care through precise wound monitoring and assessment.",
      timeline: "December 2024 - Present",
      image: "/workInProgress.jpg",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Pulse Oximetry Measurement",
      summary: "I designed and calibrated pulse oximeter circuitry incorporating LEDs and photodiode sensors, implementing both analog and digital filtering techniques in LabVIEW to process pulse signals effectively. This project provided valuable hands-on experience in biomedical instrumentation and real-time data acquisition systems, specifically focused on health monitoring applications that could be deployed in clinical or home healthcare settings.",
      timeline: "October 2024 - December 2024",
      image: "/pulseoximetry.jpg",
      linkPreview: "/",
      linkSource: "/",
    },
    {
      name: "Custom 3D Printed Splints",
      summary: "I developed a customizable, eco-friendly splint solution using 3D scanning technology and medical-grade ASA materials for rapid production within a collaborative team of four engineers. The project involved implementing CAD design principles and evaluating advanced scanning options to achieve precise, non-invasive measurements that ensure optimal fit and comfort for patients while maintaining the structural integrity required for effective medical splinting.",
      timeline: "August 2024 - December 2024",
      image: "/splin3DPrint.png",
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
