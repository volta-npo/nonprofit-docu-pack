export const saas = {
  "productName": "Nonprofit DocuPack",
  "category": "Finance & Grants",
  "northStar": "organizations with complete funder-ready document packets",
  "segments": [
    "Micro nonprofits",
    "Fiscal sponsors",
    "Student finance teams",
    "Board treasurers"
  ],
  "jobs": [
    "Inventory funder documents and expiration dates",
    "Generate missing-document requests for nonprofit staff",
    "Assemble board/funder packet outlines",
    "Track renewal reminders and confidentiality labels"
  ],
  "plans": [
    {
      "name": "Community",
      "price": "Free",
      "promise": "Single organization document checklist"
    },
    {
      "name": "Readiness",
      "price": "35/mo",
      "promise": "Expiry alerts, request scripts, packet builder"
    },
    {
      "name": "Chapter",
      "price": "149/mo",
      "promise": "Multi-client doc queues and mentor review"
    },
    {
      "name": "Funder Network",
      "price": "Custom",
      "promise": "Portfolio readiness and compliance snapshots"
    }
  ],
  "metrics": [
    {
      "label": "Packet completeness",
      "current": 73,
      "target": 95,
      "note": "Required docs collected"
    },
    {
      "label": "Expiry risk cleared",
      "current": 58,
      "target": 90,
      "note": "Expired/soon-expiring docs resolved"
    },
    {
      "label": "Confidential labels applied",
      "current": 81,
      "target": 100,
      "note": "Sensitive records classified"
    },
    {
      "label": "Request response rate",
      "current": 66,
      "target": 85,
      "note": "Missing-doc requests completed"
    }
  ],
  "playbooks": [
    "Document inventory intake",
    "Missing-doc request sprint",
    "Confidentiality labeling review",
    "Board/funder packet assembly",
    "Renewal reminder scheduling"
  ],
  "integrations": [
    "Google Drive folder map",
    "DocuSign/HelloSign links",
    "Calendar renewal reminders",
    "Email request templates",
    "CSV packet manifest"
  ],
  "controls": [
    "Expired required docs block readiness",
    "Confidential documents require labels",
    "Exports include manifest, not raw private files",
    "Board/funder packet needs owner approval"
  ],
  "roadmap": [
    "Document metadata schema",
    "Expiry alert automation",
    "Secure attachment references",
    "Packet version history",
    "Funder-specific checklist templates"
  ],
  "personas": [
    {
      "name": "Operations coordinator",
      "role": "Collects and updates nonprofit documents",
      "pain": "Document status and expiry dates are scattered",
      "success": "Every funder packet shows readiness and missing docs",
      "activation": "Create document inventory"
    },
    {
      "name": "Executive director",
      "role": "Approves sensitive documents and final packets",
      "pain": "Unsure what is safe to send to each funder",
      "success": "Receives redacted, funder-specific packet checklist",
      "activation": "Review confidentiality controls"
    },
    {
      "name": "Grant manager",
      "role": "Builds attachments for applications quickly",
      "pain": "Last-minute missing attachments delay submissions",
      "success": "Exports funder-ready packet with renewal reminders",
      "activation": "Export packet checklist"
    }
  ],
  "journeys": [
    {
      "stage": "Inventory",
      "moment": "Catalog required governance, finance, program, and compliance documents",
      "success": "Each document has owner, status, and expiry date",
      "automation": "Document taxonomy wizard"
    },
    {
      "stage": "Validation",
      "moment": "Check freshness, signatures, board approval, and confidentiality",
      "success": "Stale or sensitive docs are flagged",
      "automation": "Expiry and confidentiality scanner"
    },
    {
      "stage": "Gap closure",
      "moment": "Assign missing-doc scripts and renewal tasks",
      "success": "Critical packet gaps have owners and due dates",
      "automation": "Reminder and email script generator"
    },
    {
      "stage": "Packet assembly",
      "moment": "Select funder-specific attachment set",
      "success": "Packet contains only approved, current documents",
      "automation": "Funder packet builder"
    },
    {
      "stage": "Renewal operations",
      "moment": "Track upcoming expirations and board actions",
      "success": "No required docs expire unnoticed",
      "automation": "Renewal calendar export"
    }
  ],
  "features": [
    {
      "name": "Document taxonomy engine",
      "tier": "Community",
      "description": "Governance, finance, tax, program, HR, and compliance document categories",
      "evidence": "Each doc row has source, owner, and freshness status"
    },
    {
      "name": "Expiry and renewal tracker",
      "tier": "Team",
      "description": "Automatic risk labels for stale or soon-to-expire documents",
      "evidence": "Renewal tasks include due date and responsible owner"
    },
    {
      "name": "Confidentiality and redaction controls",
      "tier": "Team",
      "description": "Sensitive-field flags and funder-safe export rules",
      "evidence": "Exports document redaction decisions"
    },
    {
      "name": "Missing-doc script generator",
      "tier": "Chapter",
      "description": "Email/request scripts for board, finance, and program owners",
      "evidence": "Scripts reference exact missing document and deadline"
    },
    {
      "name": "Funder packet assembler",
      "tier": "Chapter",
      "description": "Reusable packet profiles for common application types",
      "evidence": "Packet exports list included and withheld documents"
    },
    {
      "name": "Board-ready compliance dashboard",
      "tier": "Network",
      "description": "Cross-program readiness, renewal, and audit visibility",
      "evidence": "Aggregated readiness excludes confidential document content"
    }
  ],
  "experiments": [
    {
      "hypothesis": "Taxonomy prompts reduce missing funder attachments",
      "measure": "Packet completeness",
      "target": "95% complete before deadline",
      "cadence": "weekly"
    },
    {
      "hypothesis": "Renewal reminders prevent expired documents",
      "measure": "Renewal on-time rate",
      "target": "100% renewed before expiry",
      "cadence": "monthly"
    },
    {
      "hypothesis": "Redaction controls reduce unsafe exports",
      "measure": "Confidentiality incidents",
      "target": "0 incidents",
      "cadence": "per packet"
    },
    {
      "hypothesis": "Request scripts speed gap closure",
      "measure": "Missing-doc turnaround",
      "target": "3 business days",
      "cadence": "weekly"
    }
  ],
  "risks": [
    {
      "risk": "Confidential documents sent to wrong funder",
      "mitigation": "Packet profiles and redaction controls before export",
      "owner": "Executive director",
      "severity": "high"
    },
    {
      "risk": "Expired documents remain marked ready",
      "mitigation": "Expiry dates and renewal risk scoring",
      "owner": "Operations coordinator",
      "severity": "high"
    },
    {
      "risk": "Board approvals missing from governance docs",
      "mitigation": "Approval evidence required for certified status",
      "owner": "Board liaison",
      "severity": "medium"
    },
    {
      "risk": "Document inventory becomes stale",
      "mitigation": "Renewal calendar and freshness review cadence",
      "owner": "Grant manager",
      "severity": "medium"
    }
  ],
  "automations": [
    {
      "name": "Expiry monitor",
      "trigger": "Document expires within configured window",
      "action": "Create renewal task and warning",
      "owner": "Operations coordinator"
    },
    {
      "name": "Missing-doc requester",
      "trigger": "Packet requires unavailable document",
      "action": "Generate owner-specific request script",
      "owner": "Grant manager"
    },
    {
      "name": "Redaction checker",
      "trigger": "Packet export requested",
      "action": "Flag sensitive documents and require approval",
      "owner": "Executive director"
    },
    {
      "name": "Board packet digest",
      "trigger": "Monthly compliance review",
      "action": "Export readiness and renewal agenda",
      "owner": "Board liaison"
    }
  ],
  "dashboards": [
    {
      "name": "Document inventory",
      "audience": "Operations",
      "widgets": [
        "Ready docs",
        "Missing docs",
        "Expiring soon",
        "Owners overdue"
      ]
    },
    {
      "name": "Packet builder",
      "audience": "Grant managers",
      "widgets": [
        "Funder profile",
        "Attachment readiness",
        "Confidentiality flags",
        "Export status"
      ]
    },
    {
      "name": "Board compliance view",
      "audience": "Leadership",
      "widgets": [
        "Renewals due",
        "Approval gaps",
        "Audit readiness",
        "Policy updates"
      ]
    }
  ],
  "templates": [
    {
      "name": "Funder packet checklist",
      "format": "Markdown",
      "sections": [
        "Included documents",
        "Missing documents",
        "Redactions",
        "Approval notes"
      ]
    },
    {
      "name": "Document inventory CSV",
      "format": "CSV",
      "sections": [
        "Document",
        "Category",
        "Owner",
        "Status",
        "Expiry",
        "Confidentiality"
      ]
    },
    {
      "name": "Missing document request",
      "format": "Markdown",
      "sections": [
        "Needed item",
        "Why it matters",
        "Due date",
        "Submission instructions"
      ]
    }
  ]
};
