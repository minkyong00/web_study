// json 실습

// 네이버 언론사별 랭킹뉴스
// https://news.naver.com/main/ranking/popularDay.naver

// 3. 버튼을 누르면 언론사명, 언론사별 뉴스제목을 테이블로 출력한다.
// * 선택 : 뉴스제목 클릭 시 해당 뉴스로 이동하는 기능

fetch('https://news.naver.com/main/ranking/popularDay.naver')
.then(async res => {
    
    // 1. 랭킹뉴스 웹페이지의 HTML을 불러온다
    const news = new TextDecoder("euc-kr").decode(await res.arrayBuffer());
    
    // 2. 언론사명, 언론사별 뉴스제목(5개씩)을 JSON문자열로 생성한다.

    // 언론사명
    
    const cnameStartTag = '<strong class="rankingnews_name">';
    let cnameStartInx = news.indexOf(cnameStartTag);
    
    let nameArr = [];
    while(cnameStartInx !== -1){
        cnameStartInx = news.indexOf(cnameStartTag, cnameStartInx + cnameStartTag.length);
        const cnameEndInx = news.indexOf('</strong>', cnameStartInx);
        const cname = news.substring(cnameStartTag.length + cnameStartInx, cnameEndInx);
        nameArr.push(cname);
    }
    
    console.log(nameArr.splice(0, 82));
    
    
    // 언론사별 뉴스제목
    const ctitleTag = `class="list_title nclicks('RBP.rnknws')"`;
    let ctitleStartInx = news.indexOf(ctitleTag);


    let titleArr = [];
    while(ctitleStartInx !== -1){
        ctitleStartInx = news.indexOf(ctitleTag, ctitleStartInx + ctitleTag.length);
        const ctitleEndInx = news.indexOf('</a>', ctitleStartInx);
        const ctitle = news.substring(ctitleTag.length + ctitleStartInx + 1, ctitleEndInx);
        titleArr.push(ctitle);
    }
    
    console.log(titleArr.splice(0, 5));
    
    
    // 언론사별 뉴스 링크
    const clinkTag = `class="list_title nclicks('RBP.rnknws')"`;
    let clinkStartInx = news.indexOf(clinkTag);


    let linkArr = [];
    while(clinkStartInx !== -1){
        clinkStartInx = news.indexOf(clinkTag, clinkStartInx + clinkTag.length);
        const clinkEndInx = news.indexOf('</a>', clinkStartInx);
        const clink = news.substring(clinkTag.length + clinkStartInx - 103, clinkEndInx - 83);
        linkArr.push(clink);
    }
    
    console.log(linkArr.splice(0, 5));
    
    for(let name of nameArr){
        return ``
    }


    const newJson = [
        
    ];

    console.log(newJson);

});


