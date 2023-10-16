# File Metadata Microservice

The File Metadata Microservice allows you to submit a file via a form and receive information about the file, including its name, type, and size in bytes. This microservice is part of my entries the FreeCodeCamp Backend Development and APIs Certification. It was built to be functionally similar to the [File Metadata Example provided by FreeCodeCamp](https://file-metadata-microservice.freecodecamp.rocks/).

## Tech Stack

- **Express.js**
- **multer** (for handling file uploads)

## How it Works

This microservice can be accessed via HTTP requests to the following endpoint:

- To submit a file and receive metadata:

  ```
  POST /api/fileanalyse
  ```

### Functionality

1. **File Upload**:

   - You can submit a file using a form with a file input field named `upfile`.

2. **File Metadata Response**:

   - When you submit a file, you will receive a JSON response with the following properties:
     - `name`: The name of the uploaded file.
     - `type`: The MIME type of the uploaded file.
     - `size`: The size of the file in bytes.

## Example Usage

Here's an example of how to use the File Metadata Microservice:

- When you submit a file, you will receive a JSON response with the file metadata:

  ```json
  {
    "name": "example.jpg",
    "type": "image/jpeg",
    "size": 123456
  }
  ```

## Getting Started

To run this File Metadata Microservice on your local machine, follow these steps:

1. Clone the repository.
2. Install the required dependencies using npm or yarn.
3. Start the server with your preferred Node.js runtime.
4. Access the microservice at `http://localhost:3000/api/filemetadata`.

## Author

Rifki Salim

## License

This project is open-source and available under the [MIT License](LICENSE.md).
