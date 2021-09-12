# Quixel Front End Task

## What To Implement

- Application: A Mini Content Management System.

## Tools And Technologies Used

- React
- Redux
- Redux Persist
- AntD
- SCSS
- Typescript
- Picsum API
- Axios
- UUID Package

## Steps Taken To Implement

- Bootstrapped Create React App ( Typescript with Redux ).
- Added SCSS, Antd, React Router and Redux Persist Support.
- Structured Project and added a basic layout.
- Developed routes for navigation.
- Developed basic screens and attached them to routes.
- Built re-useable components using AntD.
- Stitched those components to create views.
- Wrote some custom styles and media queries for manual responsiveness.
- Added Redux to the views to Add Blog, View All Blogs, View Single Blog.
- Added Redux Persist to retain data on refresh.
- Tested out everything using dummy data in redux store.

## Guide To Run Application

- Install npm dependencies by executing following in the terminal `npm install`.
- To see it running, execute `npm run start`.
- Go to `localhost:3000` to see the application running.

---

## Bonus Task: How to Implement / Issues:

- Allowing users to write html in content
- Potential issues with this.

### How to get the html from user.

- In the `AddBlogForm.tsx` component, we already get content and store it as a string.
- We can still store the content as a string even if it is html in the content Text Area.

Further more when we want to render that content to properly format and display contents of the html string onto the BlogView. There are various ways to do that,

#### Solution One:

- We can easily take the content html string from our redux store as `blog.content` and do this to the element that is supposed to display that content,

```
//html
<div dangerouslySetInnerHTML={{__html: blog.content}} />
```

#### Solution Two:

- We can easily take the content html string from our redux store as `blog.content` and use an npm package called `html-react-parser` to parse the html and render it as,

```
import parse from 'html-react-parser';

//html
<div>
  {
    parse(blog.content);
  }
</div>
```

### Solution Three:

- We can easily take the content html string from our redux store as `blog.content`.
- Create a ref to the element that content is eventually going to be rendered to.
- Set the inner html of that ref to be `blog.content`.
- Its is pretty similar to Solution 1 interns that it also sets the innerHTMl but this way is much safer as,

```
const contentRef = useRef<HTMLSpanElement>(null);

useEffect(() => {
    if (contentRef.current) {
        contentRef.current.innerHTML = blog.content;
    }
}, [contentRef]);

//html
<div ref={contentRef} />
```

#### Potential Issue with taking html as a string:

- If we are taking html as a string from the user, we are not guaranteed that the html entered is valid for following,
  - It has the proper structuring required to be rendered / parsed.
  - It has matching opening and closing tags and are in perfect order.
  - Whether the tags used even exist in html or not.
  - There could be a typo or anything in the html string that it does not recognize.

#### Possible Solutions:

- One of the easier solution is to use third party **Rich Text Editor** such as `react quill`, `Tiny MCE`, `CKEditor`.
- The second solution is after user submits, a custom coded validator runs that can read the input content string and parse it into html by identifying and validating all of the necessary checks.
- The third solution is to monitor actively whatever is being written in the content box and validate it on the fly and does not let user submit until the whole content is validated.
