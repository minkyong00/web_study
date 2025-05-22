// ex.28.iterable2.js
// 이터러블 실습2

// 원격지 JSON 서버에서 JSON데이터 획득
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
            // console.log(json);
            
            // 모든 사용자 정보를 아래 형식으로 출력
            // *************************************************************
            // [1번]
            // Bret (Leanne Graham, Sincere@april.biz, 1-770-736-8031 x56442)
            // 주소 : Kulas Light Apt. 556 Gwenborough (92998-3874) [-37.3159, 81.1496]
            // 웹사이트 : hildegard.org
            // 회사 : Romaguera-Crona, harness real-time e-markets
            // *************************************************************

            // company:{name:cname, bs} 키값이 겹칠 때 : 다른 이름 생성

            for(user of json){
                const {
                    id, name, username, email, phone, 
                    address:{street, suite, city, zipcode, geo:{lat, lng}}, 
                    website, company:{name:cname, bs}
                } = user;
                
                console.log(`
                    [${id}번]
                    ${username} (${name}, ${email}, ${phone})
                    주소 : ${street} ${suite} ${city} (${zipcode}) [${lat}, ${lng}]
                    웹사이트 : ${website}
                    회사 : ${cname}, ${bs}   
                `);

                // console.log(email);
                
            }
        });

            fetch('https://jsonplaceholder.typicode.com/albums')
                .then(res => res.json())
                .then(json => {
                    console.log(json);

                    for(album of json){
                        const { userId, title } = album;
                        if(userId == 1) console.log(title);
                    }
                    
                })