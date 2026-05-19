export const domain = {
    "kind": "document-packet",
    "title": "Nonprofit DocuPack Document Packet",
    "purpose": "A purpose-built document packet interface for a document readiness checklist and packet builder for small nonprofits applying for funding.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Document inventory",
    "metricLabels": [
        "Packet Completeness",
        "Expiry Risk",
        "Confidentiality Labeling"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Eastside Youth Arts Collective",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "organizations with complete funder packets",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "EIN/registration docs tracked",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Funder packet checklist",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "EIN/registration docs tracked",
        "501c3/fiscal status tracked",
        "Board docs tracked",
        "Budget docs tracked",
        "Impact/program docs tracked",
        "Expiration dates reviewed",
        "Missing-doc email generated",
        "Packet checklist exported"
    ],
    "artifacts": [
        "Funder packet checklist",
        "Missing document emails",
        "Document inventory CSV"
    ],
    "checks": [
        "Expired docs flagged",
        "Required docs block completeness",
        "Confidential docs show warning"
    ],
    "sampleClient": "Eastside Youth Arts Collective"
};
//# sourceMappingURL=domain.js.map