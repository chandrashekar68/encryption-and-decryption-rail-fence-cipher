let ebtn = document.getElementById('ebtn');
console.log(ebtn);
ebtn.addEventListener("click", function handleClick(){
    let encrypt = document.getElementById('encrypt').value;
    let ekey = document.getElementById('ekey').value;
    console.log(encrypt);
    console.log(ekey);
    console.log(encrypt.length)
    let key = ekey;
    var encmsg="";
    let i = 0;
    let first = 0
    while(key>1){
        let val = 2*key - 2;
        let cur = 0;
        let count = 0
        while(cur<encrypt.length){
            encmsg = encmsg.concat(encrypt[cur])
            // console.log(encmsg)
            // console.log(encrypt[cur])
            if(cur == 0){
                encrypt = encrypt.slice(cur+1,encrypt.length)
            }
            else{
                encrypt = encrypt.slice(0,cur)+encrypt.slice(cur+1,encrypt.length)
            }
            // console.log(encrypt)
            if(first == 0 || count == 0){
                cur += val-1;
                count++
            }
            else{
                count--;
            }

        }
        first = 1;
        key--;
    }
    encmsg = encmsg.concat(encrypt)
    let showenc = document.getElementById('showenc');
    showenc.innerHTML = encmsg;

}
)
let dbtn = document.getElementById('dbtn');
console.log(dbtn);
dbtn.addEventListener("click", function handleClick(){
    let decrypt = document.getElementById('decrypt').value;
    let dkey = document.getElementById('dkey').value;
    console.log(decrypt);
    console.log(dkey);
    console.log(decrypt.length)
    let key = dkey;
    let declen = decrypt.length
    var decmsg="";
    var sm_dec = []
    let first = 0
    while(key>1){
        let val = 2*(key-1)
        let temp = 0
        let count = 0
        let cur = 0
        while(temp<decrypt.length){
            cur++
            //  console.log("ggg")
            if(first == 0 || count == 0){
                temp += val
                // console.log("hyy0")
                count++
            }
            else{
                // console.log("hyy1")
                temp++
                count--
            }
        }
        sm_dec[dkey-key] = decrypt.slice(0,cur)
        // console.log(sm_dec[dkey-key])
        decrypt = decrypt.slice(cur,decrypt.length)
        // console.log(decrypt)
        first = 1
        key--
    }
    sm_dec[dkey-key] = decrypt
    // console.log(sm_dec[0])
    for(let i=0;i<dkey;i++){
        // console.log(sm_dec[i])
    }
    while(declen>0){
        cnt = 0;
        while(cnt<dkey){
            decmsg += sm_dec[cnt].slice(0,1)
            // console.log(decmsg)
            sm_dec[cnt] = sm_dec[cnt].slice(1,sm_dec[cnt].length)
            cnt++
            if(declen == 0){
                break
            }
        }
        cnt--
        while(cnt>1){
            cnt--
            decmsg += sm_dec[cnt].slice(0,1)
            // console.log(decmsg)
            sm_dec[cnt] = sm_dec[cnt].slice(1,sm_dec[cnt].length)
            if(declen == 0){
                break
            }
        }
        declen--
    }
    console.log(decmsg)
    let showdec = document.getElementById('showdec');
    showdec.innerHTML = decmsg
}
)