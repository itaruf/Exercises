using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Threading;

namespace Inheritance
{
    public class VideoPost : Post
    {
        protected bool IsPlaying = false;
        protected int CurrentTimer = 0;
        protected Timer TimerVideo;
        protected string VideoPostUrl;
        protected int Length;
        public int getLength() {
            return this.Length;
        }
        public void setLength(int Length) {
            this.Length = Length;
        }
        public string getVideoPostUrl() {
            return this.VideoPostUrl;
        }
        public void setVideoPostUrl(string VideoPostUrl) {
            this.VideoPostUrl = VideoPostUrl;
        }
        public bool getIsPlaying() {
            return this.IsPlaying;
        }
        public void setIsPlaying(bool IsPlaying) {
            this.IsPlaying = IsPlaying;
        }

        public Timer getTimerVideo() {
		    return this.TimerVideo;
	    }

	    public void setTimerVideo(Timer TimerVideo) {
		    this.TimerVideo = TimerVideo;
    	}
        public int getCurrentTimer() {
            return this.CurrentTimer;
        }
        public void setCurrentTimer(int CurrentTimer) {
            this.CurrentTimer = CurrentTimer;
        }
        public VideoPost() : this("Undefined", "Undefined", "Undefined", 0, false)
        {
            System.Console.WriteLine("Default Constructor called in VideoPost");
        }
        public VideoPost(string Title, string SendByUsername, string VideoPostUrl, int Length, bool IsPublic) : base(Title, SendByUsername, IsPublic)
        {
            this.VideoPostUrl = VideoPostUrl;
            this.Length = Length;
            System.Console.WriteLine("Constructor called in VideoPost");
        }
        public override string ToString() {
            return($"ID: {this.ID}, Title: {this.Title}, Send by: {this.SendByUsername}, Video URL: {this.VideoPostUrl}, Video Length: {this.Length}, Public: {this.IsPublic}");
        }
        public void Play() {
            if (!IsPlaying) {
                IsPlaying = true;
                System.Console.WriteLine("Playing");
                this.TimerVideo = new Timer(TimerCallBack, null, 0, 1000);
            }
        }
        public void TimerCallBack(Object O) {
            if (CurrentTimer < Length) {
                CurrentTimer++;
                Console.WriteLine($"Current timer: {CurrentTimer}");
            }
            else {
                Stop();
            }
        }
        public void Stop() {
            if (IsPlaying) {
                IsPlaying = false;
                System.Console.WriteLine($"Stop playing - current duration : {CurrentTimer}");
                CurrentTimer = 0;
                TimerVideo.Dispose();
            }
        }
    }
}