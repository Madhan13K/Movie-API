package dev.madhan13k.movies_api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "reviews")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Review {
    @Id
    private ObjectId id;
    private String body;

    public Review(String body) {
        this.body = body;
    }
}
