using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance
{
    public class ImagePost : Post
    {
        private string ImageUrl;
        public string getImageUrl() {
            return this.ImageUrl;
        }
        public void setImageUrl(string ImageUrl) {
            this.ImageUrl = ImageUrl;
        }
        public ImagePost() : this("Undefined", "Undefined", "Undefined", false)
        {
            System.Console.WriteLine("Default Constructor called in ImagePost");
        }
        public ImagePost(string Title, string SendByUsername, string ImageUrl, bool IsPublic) : base(Title, SendByUsername, IsPublic)
        {
            this.ImageUrl = ImageUrl;
            System.Console.WriteLine("Constructor called in ImagePost");
        }
        public override string ToString() {
            return($"ID: {this.ID}, Title: {this.Title}, Send by: {this.SendByUsername}, Image URL: {this.ImageUrl}, Public: {this.IsPublic}");
        }
    }
}