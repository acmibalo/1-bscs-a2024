document.getElementById('mainframe').addEventListener('load', function() {
        try {
            const iframeDoc = this.contentDocument || this.contentWindow.document;
            if (iframeDoc) {
                const styleElement = iframeDoc.createElement('style');
                styleElement.textContent = `
                    * {
                        cursor: url('./images/arrow.png'), auto;
                    }
                `;
                iframeDoc.head.appendChild(styleElement);
            }
        } catch (e) {
            console.error('Could not access iframe content: ', e);
        }
    });
