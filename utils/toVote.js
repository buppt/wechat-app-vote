function toVote(voteId){
  wx.navigateTo({
    url: '../votePage/votePage?voteId='+voteId
  })
}
module.exports.toVote=toVote

