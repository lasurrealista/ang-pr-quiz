import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quiz: Quiz = new Quiz();
  quizList$: Observable<Quiz[]> = this.quizService.list$;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.quizService.getAll();
  }

  onDelete(quiz: Quiz): void {
    this.quizService.remove(quiz).subscribe(
      () => this.quizService.getAll()
    )
  }

  onUpdate(quiz: Quiz): void {

    if (quiz.id === 0) {
      this.quizService.create(quiz);
    }

    this.quizService.update(quiz);
  }

}
