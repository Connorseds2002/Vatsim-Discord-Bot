/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, member) => {
    console.log('Guild member add was registered.');
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
};