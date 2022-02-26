

function generateDomain(top){
    let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];


  for (let pindex =0 ; pindex<2 ; pindex ++) {
      for(aindex=0;aindex<2 ; aindex ++){
          for(nindex=0 ; nindex<2 ; nindex++){
              console.log(pronoun[pindex] + adj[aindex] + noun[nindex] +top);
          }
      }

  }

}
generateDomain(".net")


  

