using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance
{
    public class Post
    {       
        // Member attributes
        protected static int CurrentPostID;
        protected int ID;
        protected string Title;
        protected string SendByUsername;
        protected bool IsPublic;
        // Contructors
        public Post() : this("Undefined", "Undefined", false) {
            System.Console.WriteLine("Default constructor called in Post");
        }
        public Post(string Title, string SendByUsername, bool IsPublic) {    
            System.Console.WriteLine("Constructor called in Post");                        
            this.ID = GetNextID(); // Hard Coded        
            this.Title = Title;
            this.SendByUsername = SendByUsername;
            this.IsPublic= IsPublic;
        }
        ~Post() {
            System.Console.WriteLine("Destructor called in Post");
        }
        // Member methods
        public bool getIsPublic() {
            return this.IsPublic;
        }
        public void setIsPublic(bool IsPublic) {
            this.IsPublic = IsPublic;
        }
        protected int GetNextID() {
            return(++CurrentPostID);
        }
        public void Update(string Title, bool IsPublic) {
            System.Console.WriteLine($"Updating");
            this.Title = Title;
            this.IsPublic = IsPublic;
        }
        public override string ToString() {
            return($"ID: {this.ID}, Title: {this.Title}, Send by: {this.SendByUsername}, Public: {this.IsPublic}");
        }
        // Setters & Getters
        public int getID() {
            return this.ID;
        }
        public void setID(int ID) {
            this.ID = ID;
        }
        public string getTitle() {
            return this.Title;
        }
        public void setTitle(string Title) {
            this.Title = Title;
        }
        public string getSendByUsername() {
            return this.SendByUsername;
        }
        public void setSendByUsername(string SendByUsername) {
            this.SendByUsername = SendByUsername;
        }
    }
}