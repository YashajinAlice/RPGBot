const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const SpotifyWebApi = require('spotify-web-api-node');

class MusicBot {
  constructor() {
    this.client = new Discord.Client({ intents: 32509 });
    this.queue = new Map();
    this.spotifyApi = new SpotifyWebApi({
      clientId: '0629ad1445d749ebb52e8cd783b82891',
      clientSecret: '86f78c2e63b242f3a73c9b057360df71',
    });
  }

  async play(message, url) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('請先加入一個語音頻道！');
    
    const connection = await voiceChannel.join();
    const dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }));

    dispatcher.on('finish', () => {
      this.queue.delete(message.guild.id);
      voiceChannel.leave();
    });

    this.queue.set(message.guild.id, dispatcher);
  }

  skip(message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('請先加入一個語音頻道！');
    
    if (this.queue.has(message.guild.id)) {
      this.queue.get(message.guild.id).end();
    }
  }

  async searchAndPlay(message, query) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('請先加入一個語音頻道！');
    
    const connection = await voiceChannel.join();

    // 搜尋 YouTube 音樂
    const searchResult = await ytdl.search(query);
    const url = searchResult[0].url;

    const dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }));

    dispatcher.on('finish', () => {
      this.queue.delete(message.guild.id);
      voiceChannel.leave();
    });

    this.queue.set(message.guild.id, dispatcher);
  }

  async searchAndPlaySpotify(message, query) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('請先加入一個語音頻道！');
    
    const connection = await voiceChannel.join();

    // 搜尋 Spotify 歌曲
    const searchResult = await this.spotifyApi.searchTracks(query);
    const track = searchResult.body.tracks.items[0];
    const url = track.external_urls.spotify;

    const dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }));

    dispatcher.on('finish', () => {
      this.queue.delete(message.guild.id);
      voiceChannel.leave();
    });

    this.queue.set(message.guild.id, dispatcher);
  }

  async checkVoiceChannel(message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('請先加入一個語音頻道！');
    
    setTimeout(() => {
      if (voiceChannel.members.size === 1) {
        voiceChannel.leave();
      }
    }, 10000);
  }
}

module.exports = MusicBot;