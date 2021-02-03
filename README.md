## Post Pandemic Bucket List

Nearly a year into the pandemic, everyone is eager for a little normalcy. This site allows users to dream of their post-pandemic life by creating their personalized bucketlists. It also allows the user to update their bucketlist with the "carpe diem" button which switches items from the "to-do" column to the "done" column.

* [Deployed Link](https://drive.google.com/file/d/1EGc6n-4snmD368iOmSafDcfqN8qh6aUw/view)

## **Built With**
* [HTML](https://developer.mozihlla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git Hub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
* [MySQL](https://www.mysql.com/products/workbench/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
*  Git - used to track changes to code
______________________________________________________________________________
  
#### **Code Snippet**
This application uses the handlebars npm package as well as the express package. Handlebars is only equipped to read data in the form of an object so in order to read it we must first make it an object. In the code below, the handlebars object is represented by the const hbsObject. This hbsObject is then passed to the res.render function which is a built in express function. It renders to the 'index' page which in turn defaults to the main page. 

```
     router.get('/', function (req, res) {
    bucketlist.all(function (data) {
        const hbsObject = {
            bucketItem: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

```
The code below is what enables us to render to the index page without having the expressly write index.handlebars and pushes that content to the main page. 
```
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
```


______________________________________________________________________________

### **Author Links**

* **PAMELA GUTIERREZ**
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

* **UC Berkeley Coding Bootcamp**
  
______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   