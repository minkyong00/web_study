// 별찍기

// 1
// *
// **
// ***
// ****
// *****
// i : 0    1       2           3               4
// j : 0    0,1     0,1,2      0,1,2,3      0,1,2,3,4
for ( let i = 0; i<5; i++){ // 줄의 반복 수
    for ( let j = 0; j<i+1; j++){ // 별의 반복 수
        process.stdout.write('*');
    }
    console.log(); //줄바꿈
}

console.log();

// 2
// *****
// ****
// ***
// **
// *

// 0 5-i ++
// i : 0                1               2           3         4
// j :  0,1,2,3,4     0,1,2,3      0,1,2      0,1     0
for (let i = 0; i<5; i++){
    for (let j = 0; j< 5-i; j++){
        process.stdout.write('*');
    }
    console.log();
}

console.log();


// 3
// *****
// 0****
// 00***
// 000**
// 0000*

// 0과 *를 따로 생각, 0만 추가

for (let i = 0; i<5; i++){
    for(let j = 0; j <i; j++){ 
        process.stdout.write('0');
    }
    for (let j = 0; j< 5-i; j++){
        process.stdout.write('*');
    }
    console.log();
}

console.log();


// 4
// 0000*
// 000***
// 00*****
// 0*******
// *********


for (let i = 0; i<5; i++){
    for (let j = 0; j< 4-i; j++){
        process.stdout.write('0');
    }
    for (let j = 0; j < i*2 +1; j++){
        process.stdout.write('*');        
    }
    console.log();
}

console.log();


// 5
// *********
// 0*******
// 00*****
// 000***
// 0000*

for (let i = 0; i<5; i++){
    for (let j = 0; j< i+1; j++){
        process.stdout.write('0');
    }
    for (let j = 0; j < 10 - (i*2 +1); j++){
        process.stdout.write('*');        
    }
    console.log();
}

console.log();

//6
// 6 (9X9 box)
// *********
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *0000000*
// *********

// 1의 배수
// 9의 배수
for (let i = 1; i<10; i++){
    for (let j = 1; j<10; j++){
        if(i % 8 == 1 || j % 8 == 1){
            process.stdout.write('*');        
        } else {
            process.stdout.write('0');        
        }   
    }
    console.log();
}

console.log();


// 7 (9X9 x)
// *0000000*
// 0*00000*0
// 00*000*00
// 000*0*000
// 0000*0000
// 000*0*000
// 00*000*00
// 0*00000*0
// *0000000*

// 11                                      19
//     22                            28
//           33                37
//               44       46
//                    55
//               64      66
//         73                  77
//    82                            88 
//91                                     99

//  (1,9) 9
//  (2,8) 16
// (3,7) 21 
// (4,6) 24
// (6,4) 24
// (7,3) 21 
// (8,2) 16
// (9,1) 9 
 
// 9 16 21 24
for (let i = 1; i<10; i++){
    for (let j = 1; j<10; j++){        
        if(i == j ||
           i*j == 9 + (i - 1)*(-i + 9)
        ){
            process.stdout.write('*');        
        } else {
            process.stdout.write('0');        
        }   
    }
    console.log();
}

console.log();

// 8 (9X9 box x)
// *********
// **00000**
// *0*000*0*
// *00*0*00*
// *000*000*
// *00*0*00*
// *0*000*0*
// **00000**
// *********


// 11 12 13 14 15 16 17 18 19
// 21 22                          28 29
// 31     33                 37      39
// 41         44        46           49

for (let i = 1; i<10; i++){
    for (let j = 1; j<10; j++){        
        if(i == j || i % 8 ==1 || j % 8 == 1 ||  i*j == 9 + (i - 1)*(-i + 9)) process.stdout.write('*');        
        else process.stdout.write('0'); 
    }
    console.log();
}

console.log();


// 9 (9X9 diamond)
// ****0****
// ***000***
// **00000**
// *0000000*
// 000000000
// *0000000*
// **00000**
// ***000***
// ****0****
// i = 5 j = 1 , i = 6 j = 2. i = 7 j =3, i = 8 j = 4 (*)
// i = 5 j = 7 , i = 6 j = 5. i = 7 j =3, i = 8 j = 1 (0)
for (let i = 0; i<9; i++){
    if(i < 5){
        for (let j = 0; j< 4-i; j++) process.stdout.write('*');
        for (let j = 0; j < i*2 +1; j++) process.stdout.write('0'); 
        for (let j = 0; j< 4-i; j++) process.stdout.write('*');
    } else {
        for (let j = 0; j<= i - 5 ; j++) process.stdout.write('*');
        for (let j = 0; j < 7 - (i-5)*2; j++) process.stdout.write('0'); 
        for (let j = 0; j<= i - 5; j++) process.stdout.write('*');
    }
    console.log();
}

console.log();

// 변수로 만들어서 풀면 유지보수가 쉬움
// const line = 9;
// const middle = (line + 1)/2;
// for (let i = 0; i<line+1; i++){
//     if(i <= middle){
//         for (let j = 0; j<= middle-i; j++) process.stdout.write('*');
//         for (let j = 0; j < i*2 -1; j++) process.stdout.write('0'); 
//         for (let j = 0; j<= middle-i; j++) process.stdout.write('*');
//     } else {
//         for (let j = 0; j<=i-middle; j++) process.stdout.write('*');
//         for (let j = 0; j <= line - (i-middle)*2; j++) process.stdout.write('0'); 
//         for (let j = 0; j<= i - middle; j++) process.stdout.write('*');
//     }
//     console.log();
// }


console.log();


// 10 (9X9 sandglass)
// 000000000
// *0000000*
// **00000**
// ***000***
// ****0****
// ***000***
// **00000**
// *0000000*
// 000000000

// i = 5 j = 3, i = 6 j = 2, i = 7 j = 1, i = 8 j = 0 (*)
// i = 5 j = 3, i = 6 j = 5, i = 7 j = 7, i = 8 j = 9 (0)
for (let i = 0; i<9; i++){
    if(i < 5){
        for (let j = 0; j< i; j++) process.stdout.write('*');
        for (let j = 0; j < 10 - (i*2 + 1) ; j++) process.stdout.write('0'); 
        for (let j = 0; j< i; j++) process.stdout.write('*');
    } else {
        for (let j = 0; j< 8 - i; j++) process.stdout.write('*');
        for (let j = 0; j < i*2 - 7  ; j++) process.stdout.write('0'); 
        for (let j = 0; j< 8 - i; j++) process.stdout.write('*');
    }
    console.log();
}

console.log();



// const line2 = 13;
// const middle2 = (line2+1)/2;
// for (let i = 0; i<line2; i++){
//     if(i < middle2){
//         for (let j = 0; j< i + 1; j++) process.stdout.write('*');
//         for (let j = 0; j < (line2 + 1) - (i*2 + 1) ; j++) process.stdout.write('0'); 
//         for (let j = 0; j< i + 1; j++) process.stdout.write('*');
//     } else {
//         for (let j = 0; j< (middle2 + 3) - i; j++) process.stdout.write('*');
//         for (let j = 0; j < i*2 - (line2 - 2)  ; j++) process.stdout.write('0'); 
//         for (let j = 0; j< (middle2 + 3) - i; j++) process.stdout.write('*');
//     }
//     console.log();
// }

