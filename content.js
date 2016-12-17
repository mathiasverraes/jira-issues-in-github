
chrome.extension.sendRequest({method: "getLocalStorage", key: "jira"}, function(response) {

	const replaceLinks = function() {
        const pattern = /([A-Z]{2,}-\d+)/g;
        const jira = response.data + '/browse/';

        // selectors in which to look for jira issues
        const selectors = $('h1.gh-header-title, p.commit-title');

        selectors.each(function(){
            var self = $(this);
            if(self.attr("tagName") == 'A') { return; }

            var match = pattern.exec(self.text());
            if(match[1]) {
                // @todo this doesn't work with multiple matches in the same text
                self.html($(this).text().replace(
                    pattern,
                    ' <a style="" target="_blank" href="' + jira + match[1] + '">' + match[1] + '</a>'
                ));
            }
        });
	};

    $('#js-repo-pjax-container').on('pjax:end', function() {
        replaceLinks();
	});

    replaceLinks();
});
