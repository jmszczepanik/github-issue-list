var sidebarFilters = {
    filters: [
        {
            img: 'assets/icon-github.svg',
            name: 'All',
            count: 12,
            active: true
        },
        {
            img: 'assets/icon-open-issue.svg',
            name: 'Open',
            count: 4
        },
        {
            img: 'assets/icon-closed-issue.svg',
            name: 'Closed',
            count: 8
        }
    ]
};

var issuesList = {
    issues: [
        {
            day: '19-07-2016',
            items: [
                {
                    id: 1,
                    title: 'Page changes'
                },
                {
                    id: 2,
                    title: 'Review of last issues'
                }
            ]
        },
        {
            day: '18-07-2016',
            items: [{
                    id: 3,
                    title: 'Visual UI Update Review'
                },
                {
                    id: 4,
                    title: 'Sidebar changes'
                }
            ]
        },
        {
            day: '15-07-2016',
            items: [{
                    id: 5,
                    title: 'Crash update'
                },
                {
                    id: 6,
                    title: 'Page visual UI Update Review'
                },
                {
                    id: 7,
                    title: 'Sidebar update'
                }
            ]
        },
        {
            day: '14-07-2016',
            items: [{
                    id: 8,
                    title: 'Crash issue'
                },
                {
                    id: 9,
                    title: 'Visual update & Crash resolve'
                }
            ]
        }
    ]
};

setTemplate('filters-template', sidebarFilters, 'sidebar-filters');
setTemplate('issue-list-template', issuesList, 'issues');

function setTemplate(templateId, templateData, targetId) {
    var templateInfo = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(templateInfo);
    var data = template(templateData);

    document.getElementById(targetId).innerHTML += data;
}

var stars = document.querySelectorAll('.issue-list__element__star');
stars.forEach(function (element) {
    element.addEventListener('click', function(evt) {
        if(evt.target.src.indexOf('active') === -1 ) {
            evt.target.src = 'assets/icon-star-active.svg';
        } else {
            evt.target.src = 'assets/icon-star.svg';
        }
    });
});