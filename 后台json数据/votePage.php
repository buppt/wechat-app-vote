<?php
$voteId = $_GET["voteId"];
if ($voteId == "11"){
  echo '{"voteTitle": "My投票1",
    "voteNum": [
       [0,0,0,0,1],[0,0,0,0,0],[0,5,0,0,0],[0,0,3,4,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
    ],
    "myVote": [
       [0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
    ],
    "voteUser": "buppt",
    "voteWeek": "三"}';
}else{
  echo '{"voteTitle": "My投票2",
    "voteIntro": "第二个投票",
    "userNumber": "1",
    "voteList":[{
       "voteNumber": 1,"name": "Liming"},
{
       "voteNumber": 2,"name": "Liing","myVote":1}
,{
       "voteNumber": 1,"name": "ming"}]
    }';
}
?>