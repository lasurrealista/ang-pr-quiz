import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  question: Question = new Question();
  questionList$: Observable<Question[]> = this.questionService.list$;

  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.questionService.getAll();
  }

}
