document.getElementById('loadBtn').addEventListener('click', async () => {
    const response = await fetch('https://news.naver.com/main/ranking/popularDay.naver');
    const text = new TextDecoder("euc-kr").decode(await response.arrayBuffer());

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const newsData = [];

    const mediaSections = doc.querySelectorAll('.rankingnews_box'); // 언론사별 박스

    mediaSections.forEach(section => {
        const mediaName = section.querySelector('.rankingnews_name')?.textContent.trim();
        const articles = Array.from(section.querySelectorAll('ul.rankingnews_list > li')).slice(0, 5);

        const newsList = articles.map(li => {
            const a = li.querySelector('a');
            const title = a?.textContent.trim();
            const href = a?.href;
            return { title, link: href };
        });

        newsData.push({ media: mediaName, articles: newsList });
    });

    // 출력
    const tableEl = document.createElement('table');
    const thead = `<thead><tr><th>언론사</th><th>뉴스 제목 (Top 5)</th></tr></thead>`;
    let tbody = '<tbody>';

    newsData.forEach(item => {
        const articleLinks = item.articles.map(a =>
            `<div><a href="${a.link}" target="_blank">${a.title}</a></div>`
        ).join('');
        tbody += `<tr><td>${item.media}</td><td>${articleLinks}</td></tr>`;
    });

    tbody += '</tbody>';
    tableEl.innerHTML = thead + tbody;

    document.getElementById('newsTable').innerHTML = '';
    document.getElementById('newsTable').appendChild(tableEl);
});