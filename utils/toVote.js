function toVote(voteId){
  wx.navigateTo({
    url: '../votePage/votePage?voteId='+voteId
  })
} 
function toVoteV(voteId) {
  wx.navigateTo({
    url: '../votePageV/votePageV?voteId=' + voteId
  })
}
module.exports.toVote = toVote
module.exports.toVoteV = toVoteV

