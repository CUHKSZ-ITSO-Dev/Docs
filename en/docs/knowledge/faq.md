# Frequently Asked Questions (FAQ)

This chapter provides standardized answers to common questions encountered during the use of the knowledge base system, aiming to provide users with accurate problem localization and solution guidance.

---

## General Questions

### What is the difference between "Department Assistant" and "Campus Assistant"?

Understanding the difference between the two types of assistants is important for effectively using system functions.

*   **Department Assistant**:
    *   **Scope**: Bound to a **specific knowledge base**. When you interact with a department assistant, it will only search for answers within its bound knowledge base.
    *   **Purpose**: Provides professional, precise domain knowledge. For example, an "IT Service Desk Assistant" will only answer IT-related questions, and a "Financial Reimbursement Assistant" will only answer financial regulations.
    *   **Creation**: Any knowledge base can be configured as a department assistant by a site-wide administrator.

*   **Campus Assistant** ("HKU-SZ Assistant"):
    *   **Scope**: **Global search**. It will simultaneously search for answers in **all** knowledge bases you have access to (and other public information sources).
    *   **Purpose**: Provides a one-stop campus information Q&A service. It is the best choice when you are unsure which specialized knowledge base to ask.
    *   **Creation**: This is a global singleton feature; you do not need to create it manually.

**Recommendation**: For professional domain questions, choose **Department Assistant**; for general questions or questions with uncertain attribution, choose **Campus Assistant**.

---

## Permission Management

### What is the difference between "Read" and "Retrieve" permissions?

There are two key concepts in the permission system, explained through library management mode:

*   **Read** permission is like giving you a **reading pass**. You can walk into the library and browse, read any book on the shelf. In the system, this means you can see this knowledge base in the left sidebar and view all its document lists and content.

*   **Retrieve** permission is like asking a **librarian** a question. The librarian will give you a precise answer based on all the books they have read, but they won't let you enter the stacks to browse those books yourself. In the system, this means you **cannot see** this knowledge base or its document list, but when you use the "Campus Assistant" for a global search, AI can find content from this "retrieve-only" library to answer your questions.

**System Value**: The "Retrieve" permission mechanism significantly expands the knowledge coverage of the "Campus Assistant" while ensuring knowledge base information security, achieving multi-source knowledge integration.

### Permission Approval Mechanism Description

To ensure enterprise knowledge asset security and prevent permission configuration errors, the system sets up approval mechanisms for specific authorization operations by ordinary knowledge base administrators.

The following situations require **site-wide knowledge base administrator** approval to take effect:
1.  **Large-scale authorization**: When you attempt to grant permissions to a **department**, an **identity group** (such as all students), or a **composite rule**.
2.  **Excessive single-user authorization**: When you want to grant more than **20** independent user permissions to the same knowledge base.

Additionally, each user can have a maximum of **10** pending applications.

### Multi-Permission Conflict Handling Rules

The system adopts the **permission escalation principle** for permission conflict handling.

If a user is granted permissions through different means (for example, an individual is granted `Read` permission, their department is granted `Write` permission), the system will automatically take the **highest permission** they can obtain.

**Example**:
*   Xiao Ming is a member of the "Marketing Department," and the Marketing Department has `Read` permission for the "Product Library."
*   At the same time, his superior separately granted Xiao Ming individual `Write` permission for the "Product Library."
*   Ultimately, Xiao Ming's actual permission for the "Product Library" is `Write` (read-write).

### Site-wide Administrator Interface Display Description

The system has reasonably designed the interface display to optimize administrator operation experience and avoid sidebar information overload.

The system's interface for site-wide administrators is designed with user-friendliness in mind:

*   **As a user**: When viewing the left sidebar or using the campus assistant, the system will "forget" your administrator privileges and only display knowledge bases you have been explicitly granted permission to or have created yourself, just like a regular user.
*   **As a manager**: In the "Knowledge Base Management" backend, you can search, access, and manage any knowledge base in the system, exercising all your administrative powers.

---

## Retrieval and Q&A

### AI Retrieval Result Abnormality Analysis

When AI fails to provide expected answers, it is usually due to problems in the retrieval process. Main possible reasons include:

1.  **Document quality issues**:
    *   The document is a scanned copy or image, and the system's **OCR recognition** produced errors or messy formatting.
    *   The document content itself is vaguely expressed, or the keywords you are looking for appear as synonyms in the original text.

2.  **Retrieval configuration issues**:
    *   The `Top K` value is too low, causing relevant document snippets to be excluded in the first round of filtering.
    *   The `Rerank Cutoff` (reranking cutoff score) is set too high, causing AI to deem all initially filtered document snippets "not relevant enough" and directly give up answering.

3.  **Unclear query instruction**:
    *   Your questioning style is more colloquial, while the document content is very formal, leading to semantic matching difficulties.

**Solutions**:
*   **Check the document**: Go to "Document List" and view the parsed **content** of the document to confirm if the text is clear and accurate.
*   **Optimize retrieval**: Go to "Retrieval Test" and try adjusting parameters like `Top K` and `Rerank Cutoff`, and observe if the "returned source text" improves.
*   **Optimize prompt**: In "Retrieval Test," use "Query Rewriting Prompt" to guide AI to "translate" the user's colloquial questions into more formal language closer to the document.

> For detailed optimization steps, please refer to "[Retrieval Optimization Guide](./retrieval-optimization-guide.md)".

### Can I make AI's answer style more professional/concise/creative?

Of course.

Go to **Management Backend** -> **Knowledge Base Settings** -> **Model Settings**, and find **"Response Generation Prompt"** (`response_instructions`).

Here you can set the AI's "persona" and "style." For example:
*   **Professional style**: "You are a rigorous legal consultant. Please answer questions using formal, precise language based on the context."
*   **Concise style**: "Please provide only the core points of the answer in a list format, without any superfluous explanations."
*   **Lively style**: "You are an enthusiastic senior student. Please answer freshmen's questions in a relaxed, colloquial manner."

---

## Content Management

### What happens when I "re-index" a document?

Clicking "Re-index" triggers a brand new, complete processing flow for the document, just as if it were uploaded for the first time. This includes:
1.  **Re-parsing**: The document intelligence service will re-read your original file and convert it to plain text.
2.  **Re-chunking and Vectorization**: The RAG service will discard old knowledge nodes, chunk the newly parsed text, calculate vectors, and store them in the database.

**When to use?**
*   When a document **upload fails**.
*   When you have updated the system's underlying **document processing model** and want to process old files with the new model.
*   When you suspect the initial document parsing **content is incorrect**.

### Does tagging documents affect AI's retrieval results?

**Absolutely not.**

Tags are purely a **management tool**. Their sole purpose is to help **you** quickly categorize, filter, and find documents in the document list.

You can think of it as a colored sticky note attached to a file folder. It only affects your management efficiency, not the content inside the folder, so AI will completely ignore it during retrieval and answering.
