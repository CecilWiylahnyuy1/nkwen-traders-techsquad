Nkwen Traders Goes Digital — Pre-Launch Security Memo



1\. Security Review Scope



This review was conducted for the Nkwen Traders Goes Digital static website before public deployment to Amazon S3.



The review covered the GitHub repository, available branches and commit history, relevant Git diffs, repository contents, frontend files, and potential exposure of sensitive information.



2\. Security Checks Performed



Repository and Git History Review



The repository branches and recent commit history were reviewed to understand the contributions merged into the project. Relevant commits and merge differences were inspected, with attention given to changes that could introduce or remove sensitive information.



Secret and Credential Review



The repository was checked for common sensitive files and content, including API keys, passwords, access tokens, AWS credentials, secret keys, private keys, database credentials, and environment files.



Gitleaks version 8.30.1 was used to scan the repository.



Result: No leaks found.



No obvious exposed API keys, passwords, AWS credentials, access tokens, private keys, or other secrets were identified during the checks performed.



Frontend Security Review



The contact page was reviewed because it contains a user-facing form.



The form collects only a full name, email address, optional branch selection, and a message. It does not request passwords, payment information, PINs, or other highly sensitive credentials.



The form is currently front-end only and does not transmit submitted information to a backend.



3\. Findings



Finding 1 — No exposed secrets detected



Status: Pass



Gitleaks reported no leaks, and additional filename/content checks did not identify obvious credentials or secrets.



Finding 2 — Missing .gitignore



Severity: Low / Recommendation



A .gitignore file is not currently present at the repository root.



A .gitignore should be added to reduce the risk of accidentally committing local configuration files, environment files, credentials, or other files that should not be tracked.



Finding 3 — Missing JavaScript dependency reference



Severity: Low / Code Quality and Integrity



contact.html references main.js, but no main.js file was found in the expected location. A JavaScript file named script.js exists elsewhere in the project structure.



The development team should verify the intended JavaScript filename and path before deployment.



Finding 4 — Client-side form validation



Severity: Low / Recommendation



The contact form uses the novalidate attribute, which disables the browser’s native form validation.



The current form is front-end only, so this does not create a significant current security vulnerability. However, validation should be implemented appropriately before the form is connected to a real backend.



If a backend is introduced, all user input must also be validated and sanitized server-side rather than relying only on browser-side validation.



4\. Recommendations



1\. Add an appropriate .gitignore file before continued development and deployment.

2\. Resolve the main.js versus script.js reference inconsistency.

3\. Review and implement appropriate client-side validation for the contact form.

4\. If the contact form receives a backend in the future, implement server-side validation and input sanitization.

5\. Continue scanning for secrets before deployment and avoid committing credentials or private configuration to the repository.

6\. Ensure that deployment configuration does not expose credentials or other sensitive information.



5\. Pre-Launch Security Verdict



Based on the checks performed, no critical or high-severity security issue was identified in the reviewed repository and frontend components.



The Gitleaks scan returned “no leaks found”, and no obvious credentials or sensitive secrets were identified during the repository and frontend review.



The identified issues are primarily security-hygiene and implementation recommendations. They should be addressed before or during final integration, particularly the missing .gitignore and the incorrect/missing JavaScript reference.



Overall assessment: No critical security blocker identified from the checks performed. Proceed toward deployment after the listed recommendations are reviewed and resolved where applicable.

