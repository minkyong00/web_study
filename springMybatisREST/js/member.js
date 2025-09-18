const member = {

    listMember: () => {
        axios.get("http://localhost:8888/member/")
            .then(function(res){
                member.renderList(res.data.memberList)
            })
    },

/*
<tr>
                  <td>${member.mid}</td>
                  <td>${member.mname}</td>
                  <td><fmt:formatDate value="${member.mregdate}" pattern="yyyy-MM-dd HH:mm" /></td>
                  <td>
                    <span class="badge ${member.mdelyn eq 'Y' ? 'bg-danger' : 'bg-success'}">
                      ${member.mdelyn}
                    </span>
                  </td>
                  <td class="text-end">
                      
                    <a class="btn btn-sm btn-outline-danger"
                       href="${cpath}/member/removeMember.do?mid=${member.mid}"
                       onclick="return confirm('${member.mdelyn eq 'Y' ? '복원' : '삭제'}하시겠습니까?')">
                       [${member.mdelyn eq 'Y' ? '복원' : '삭제'}]</a>
                  </td>
                </tr> */

    renderList: (memberList) => {
        const tr = document.createElement("tr");

        for(member of memberList){
            const td = document.createElement("td");
            td.innerHTML = member.mid;
            td.innerHTML = member.mname;
            td.innerHTML = member.mdelyn;
            tr.appendChild(td);
        }

        document.querySelector("tbody").appendChild(tr);
    }

}